class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :edit, :update, :destroy]
  before_action :set_question, only: [:show, :edit, :update, :destroy]

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

  private

    def answer_params
      params.require(:answer).permit(:user_id, :question_id, :response)
    end

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def set_question
      @question = Question.find(params[:question_id])
    end

end
