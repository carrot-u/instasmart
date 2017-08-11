class SessionsController < ApplicationController
  skip_before_action: verify_authenticity_token


  def create
    logger.debug "Params = #{params}"
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end
