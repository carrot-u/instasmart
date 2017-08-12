class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
 # protect_from_forgery with: :exception
  # protect_from_forgery with: :null_session #TODO: find better solution. Turned off for testing only
  # protect_from_forgery
  # skip_before_action :verify_authenticity_token, if: :json_request?

  helper_method :current_user
  before_action :current_user

  def index
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def json_request?
    request.format.json?
  end


end
