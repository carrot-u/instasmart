class CommentsController < ApplicationController
  # before_action :comment # only: [:show, :edit, :update, :destroy]
  # before_action :set_answer, only: [:show, :edit, :update, :destroy]
  # before_action :set_question, only: [:new, :show, :edit, :update, :destroy]
  # before_action :set_comment, except: [:create]


  def index
    @comments = @commentable.comments
  end

  def create
      @comment = @commentable.comments.new comment_params
      @comment.user = current_user
      @comment.save
      redirect_to :back
  end

  def destroy
    @comment = @commentable.comments.find(params[:id])
    @comment.destroy
   
    redirect_to :back
  end

  def like
    @comment.liked_by current_user
    redirect_to question_path(@comment.question)
  end

  def dislike
    @comment.disliked_by current_user
    redirect_to question_path(@comment.question)
  end

  def unlike
    @comment.unliked_by current_user
    redirect_to question_path(@comment.question)
  end

  def undislike
    @comment.undisliked_by current_user
    redirect_to question_path(@comment.question)
  end

  private

    def comment_params
      params.require(:comment).permit(:body)
    end

    # def comment
    #   @comment ||= begin
    #     comment = params[:id] ? Comment.find(params[:id]) : Comment.new
    #     if comment_params && comment_params.length > 0
    #       comment.update_attributes(comment_params)
    #    end
    #   end
    # end

    # def set_commentable
    #   resource, id = request.path.split('/')[1,2]
    #   @commentable = resource.singularize.classify.constantize.find(id)
    # end

    # def set_comment
    #   @comment = Comment.find(params[:id])
    # end

    # def set_answer
    #   @answer = Answer.find(params)[:answer_id]
    # end

    # def set_question
    #   @question = Question.find(params[:question_id])
    # end
end
