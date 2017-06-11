class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy, :like]

  def index
    @questions = Question.all
  end

  def show
  rescue ActiveRecord::RecordNotFound
    flash.keep[:notice]="Couldn't find that question!"
    redirect_to action: :index
  end

  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    @question.save
    redirect_to @question
  end

  def edit
  end

  def update
    @question.update(question_params)
    redirect_to @question, notice: 'Question was successfully updated.'
  end

  def destroy
    @question.destroy
    redirect_to questions_path
  end

  def like
    @question.liked_by User.first
    redirect_to @question
  end

  private

    def question_params
      params.require(:question).permit(:user_id, :body, :active, :tag_list)
    end

    def set_question
      @question = Question.find(params[:id])
    end
end
