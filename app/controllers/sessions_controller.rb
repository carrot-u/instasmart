class SessionsController < ApplicationController
before_action :current_user

	def new
		unless current_user.nil?
			redirect_to home_path
		end
	end

  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to home_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end
