class AnswersController < ApplicationController

  def new
    @answer = Answer.new
    @answer.question_id = @question.id
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]
  end

end
