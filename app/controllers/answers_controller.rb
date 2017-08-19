class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :edit, :update, :like, :dislike, :undislike, :unlike]
  before_action :question, only: [:new, :show, :edit, :update, :destroy]

  def new
  end

  def show
    render json: @answer
  end

  def edit
  end

  def update
    respond_to do |format|
      if @answer.update(answer_params)
        format.html { redirect_to @question }
        format.json { render json: @question}
      else
        format.html { redirect_to @question }
        format.json { render json: @answer.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]
    @answer.user = current_user
    @answer.save
    render json: @answer
  end


  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
   
    redirect_to :back
  end

  def like
    @answer.liked_by current_user
    redirect_to question_path(@answer.question)
  end

  def unlike
    @answer.unliked_by current_user
    redirect_to question_path(@answer.question)
  end

  private

    def answer_params
      params.require(:answer).permit(:user_id, :question_id, :response)
    end

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def question
      @question ||= begin
        raise "Question id must be provided" unless params[:question_id]
        Question.find(params[:question_id])
      end
    end

    def answer_to_json
      render json: @answer
    end

end
