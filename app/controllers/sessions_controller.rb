class SessionsController < ApplicationController
  before_action: set_omniauth_header


  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  def set_omniauth_header
    response.headers["Access-Control-Allow-Origin"] = "*"
  end
end
