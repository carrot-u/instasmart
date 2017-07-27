class QuestionsController < ApplicationController
	include ActionView::Helpers::TextHelper

  before_action :current_user
	before_action :question, only: [:show, :edit, :update, :destroy]

	respond_to :html, :json

	def index
		@questions = Question.order("id DESC")
	end

	# New and create Questions
	def new
		@question = Question.new
	end

	def create
		@question = Question.new(question_params)
		@question.user = current_user
		respond_to do |format|
			if @question.save!
			  format.html { redirect_to questions_path }
			  format.json { render result: "success!"}
			else
			  format.html { render :new }
			  format.json { render json: @question.errors, status: :unprocessable_entity }
			end
		end
	end
	#end of new/create


	def show
		@question = Question.find(params[:id])
	end

	# change / edit / update
	def edit

	end

	def update
	  respond_to do |format|
	    if @question.update(question_params)
	      format.html { redirect_to @question }
	      format.json { render result: "success!"}
	    else
	      format.html { render :edit }
	      format.json { render json: @question.errors, status: :unprocessable_entity }
	    end
	  end
	end

	def destroy
	  if @question.user == current_user
	  	@question.destroy
		end
	  redirect_to questions_path
	end

	def like
    @question.liked_by @user
    redirect_to @question
  end

  def dislike
    @question.disliked_by @user
    redirect_to @question
  end

  def unlike
    @question.unliked_by @user
    redirect_to @question
  end

  def undislike
    @question.undisliked_by @user
    redirect_to @question
  end

  def tag_cloud
    @tags = Question.tag_counts_on(:tags)
  end

	private
		def question
			@question ||= begin
				logger.debug "question params #{params}"
				question = params[:id] ? Question.find(params[:id]) : Question.new
				# if question_params && question_params.length > 0
				# 	question.update_attributes(question_params)
				# end
			end
 		end

 		def user
 			@user ||=begin
 				raise "User id must be provided" unless params[:question_id]
 				Question.find(params[:question_id])
 			end
 		end

		def question_params
			params.require(:question).permit(:summary, :body, :tag_list)
		end
end
