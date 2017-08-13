class ApplicationController < ActionController::Base

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
