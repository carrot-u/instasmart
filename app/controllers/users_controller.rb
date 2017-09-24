class UsersController < ApplicationController

	def index
		@users = User.all	

		render json: @users
	end

  def search_suggestions
    @users = User.order("id DESC")
    if params[:search]
      @users = User.search(params[:search]).order("created_at DESC")
      respond_to do |format|
        if @users.length > 0
          resp = []
          @users.each do |u| 
            resp.push({ :id => u.id, :name => u.name })
          end
          format.json { render json: resp }
        else
          format.json { render json: nil }
        end
      end
    end
  end

	def show
		@user = User.find(params[:id])
		
		render json: @user 
	end
end
