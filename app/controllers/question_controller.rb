class QuestionsController < ApplicationController
	include ActionView::Helpers::TextHelper

	before_action :authenticate_user!, except: [:index, :show]
	before_action :set_question, only: [:show, :edit, :update, :destroy]



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

	end

	private
		def set_question
			@question = Question.find(params[:id])
		end

		def question_params
			params.require(:question).permit(:summary, :body)
		end

end
