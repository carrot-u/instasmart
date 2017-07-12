class CommentController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :set_answer, only: [:show, :edit, :update, :destroy]
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  def new
    @comment = Comment.new
    @comment.answer_id = @answer.id
    @comment.question_id = @question.id
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.answer_id = params[:answer_id]
    @comment.question_id = params[:question_id]
    @comment.save
    redirect_to question_path(@comment.question)
  end

  private

    def comment_params
      params.require(:comment).permit(:user_id, :question_id, :answer_id, :body)
    end

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def set_question
      @question = Question.find(params[:question_id])
    end
end
