class AnswersController < ApplicationController
  before_action :answer # , only: [:show, :edit, :update, :destroy]
  before_action :question #, only: [:show, :edit, :update, :destroy]

  def new
    # @answer = Answer.new
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

    # def set_answer
    #   @answer = Answer.find(params[:id])
    # end

    def answer
      @answer ||= begin
        answer = params[:id] ? Answer.find(params[:id]) : Answer.new
        if answer_params && answer_params.length > 0
          answer.update_attributes(answer_params)
       end
      end
    end

    # def set_question
    #   @question = Question.find(params[:question_id])
    # end

    def question
      @question ||= begin
        raise "Question id must be provided" unless params[:question_id]
        Question.find(params[:question_id])
      end
    end

end
