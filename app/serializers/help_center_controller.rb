require_dependency "help/application_controller"
require Rails.root.join("dependencies/instacart-shared/lib/zendesk")
require 'shopper_shared/twitter'

SHOPPERS_HELP_CENTER_URL = "https://instacartshoppers.zendesk.com/hc"

# This new help center likely doesn't need it's own engine now that it's mostly just authenticating and redirecting.
# Think about merging into the Applicants engine after it's done rolling out.

module Help
  class HelpCenterController < ApplicationController
    owner :shopper_management
    layout "help_center"
    before_action :authenticate_with_doorkeeper_or_digits!, only: :show

    ZENDESK_SHARED_SECRET = ENV["ZENDESK_SHARED_SECRET"]

    def authenticate_with_doorkeeper_or_digits!
      if request.headers.key?("Authorization") && doorkeeper_token
        @in_app = true
        @current_driver = Driver.find(doorkeeper_token.resource_owner_id)
      elsif params[:driver_id_granted_access_to_help] || session[:driver_id_granted_access_to_help]
        @in_app = true
        session[:driver_id_granted_access_to_help] ||= params[:driver_id_granted_access_to_help]
        @current_driver = Driver.find(session[:driver_id_granted_access_to_help])
      elsif session[:driver_id]
        @in_app = false
        @current_driver = Driver.find(session[:driver_id])
      else
        @in_app = false
        redirect_to '/help/help_center/login'
      end
    end

    def show
      if current_driver
        sign_into_zendesk(current_driver)

        segment_identify
        segment_page("Home")
      else
        redirect_to help_center_login
      end
    end

    def redirection #trying to workaround zendesk 30 second session issue. Remove after launching Help Center 2.0 or by 7/15/17
      redirect_to params[:return_to]
    end

    def in_app?
      @in_app
    end
    helper_method :in_app?

    def login

    end

    def verify_login
      ActiveRecord::Base.connection.stick_to_master! if ActiveRecord::Base.connection.respond_to?(:stick_to_master!)

      phone = ShopperShared::Twitter.new(params[:api_url], params[:auth_header]).get_phone_number
      Rollbar.warning("Driver phone number not returned", params: params) unless phone.present?

      driver = Driver.by_fuzzy_phone(phone).take
      if driver
        sign_in_driver(driver)
        render json: { redirect_to: '/help/help_center' }
      else
        render json: {error: "Driver does not exist for that phone number."}
      end
    end

    private

    def sign_in_driver(driver)
      session[:driver_id] = driver.id
      driver.segment_track("driver_login")
    end

    def sign_into_zendesk(driver)
      iat = Time.now.to_i
      jti = "#{iat}/#{SecureRandom.hex(18)}"

      payload = JWT.encode({
        iat: iat, # Seconds since epoch, determine when this token is stale
        jti: jti, # Unique token id, helps prevent replay attacks
        organization: driver.zendesk_organization,
        tags: shopper_tags(driver),
        name: driver.name,
        email: driver.email,
        phone: driver.phone
        # external_id: driver.id # Removing to see if we can allow ZD Agent account to log in via Single Sign On. 
      },
      ZENDESK_SHARED_SECRET)

      Rails.logger.info("Redirecting to zendesk and sending JWT payload at: #{PT.now} / #{PT.now.to_i}") #trying to identify where the double redirect is coming from.

      redirect_to zendesk_sso_url(payload)
    end

    def zendesk_sso_url(payload)
      url = "https://instacart.zendesk.com/access/jwt?jwt=#{payload}"
      url += "&return_to=" + SHOPPERS_HELP_CENTER_URL #tells Zendesk which help center to send users to (we have two)
      url
    end

    # TODO: an almost duplicate of this live in customers/instacart/app/jobs/drivers/zendesk_ticket_job.rb. Should probably merge
    def shopper_tags(shopper)
      roles = shopper.roles.map { |role| Driver::ROLES_DESC[role].try(:job) || role.to_s.humanize }
      zones = shopper.is_a?(Applicant) ? [shopper.zone].compact : shopper.zones.includes(:region).to_a
      regions = zones.map { |z| z.region.try(:name) }.compact

      new_tags = roles + zones.map(&:name) + regions
      case shopper
      when Driver
        new_tags << "3PL" if shopper.is_3pl_employee?
        new_tags << "new shopper" if shopper.batches.completed.count < 20
        new_tags << "on active batch" if shopper.incomplete_batches.exists?
        new_tags << "legal flag" if shopper.legal_hold?
        new_tags << (shopper.current_shift ? "on shift" : "off shift")
        new_tags += [
          shopper.id.to_s,
          shopper.platform,
          shopper.workflow_state,
          shopper.affiliation.try(:type).try(:to_s),
        ]
      end
      new_tags.select(&:present?).map { |s| s.to_s.parameterize }
    end

    def segment_identify
      driver = Driver.find(current_driver.id)
      return unless driver
      driver.segment_identify
    end

    def segment_page(title, params={})
      driver = Driver.find(current_driver.id)
      return unless driver
      driver.segment_page('Shopper Help Center', title, request.original_url, params)
    end
  end
end