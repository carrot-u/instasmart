class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :edit, :update, :destroy, :like, :unlike]

  def index
    @answers = Answer.all
  end

  def new
    @answer = Answer.new
    @answer.question_id = @question.id
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]
    @answer.save
    redirect_to question_path(@answer.question)
  end

  def like
    @answer.liked_by User.first
    redirect_to @question
  end

  def unlike
    @answer.unliked_by User.first
    redirect_to @question
  end

  private

    def answer_params
      params.require(:answer).permit(:user_id, :question_id, :body)
    end

    def set_answer
      @answer = Answer.find(params[:id])
    end
end
