class CommentController < ApplicationController
  before_action :comment # only: [:show, :edit, :update, :destroy]
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

  def like
    @comment.liked_by @user
    redirect_to question_path(@comment.question)
  end

  def dislike
    @comment.disliked_by @user
    redirect_to question_path(@comment.question)
  end

  def unlike
    @comment.unliked_by @user
    redirect_to question_path(@comment.question)
  end

  def undislike
    @comment.undisliked_by @user
    redirect_to question_path(@comment.question)
  end

  private

    def comment_params
      params.require(:comment).permit(:user_id, :question_id, :answer_id, :body)
    end

    def comment
      @comment ||= begin
        comment = params[:id] ? Comment.find(params[:id]) : Comment.new
        if comment_params && comment_params.length > 0
          comment.update_attributes(comment_params)
       end
      end
    end

    def set_answer
      @answer = Answer.find(params)[:answer_id]
    end

    def set_question
      @question = Question.find(params[:question_id])
    end
end
