class CommentsController < ApplicationController
  before_action :set_comment, only: [:edit, :update]


  def index
    @comments = @commentable.comments
  end

  def create
      @comment = @commentable.comments.new comment_params
      @comment.user = current_user
      @comment.save
      if @commentable.class.name == "Question"
        format.html { redirect_to @commentable }
      else
        redirect_to questions_path
      end
  end

  def edit
    @comment = @commentable.comments.find(params[:id])
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        if @commentable.class.name == "Question"
          format.html { redirect_to @commentable }
        else
          redirect_to questions_path
        end
        format.json { render json: @commentable}
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
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

    def set_comment
      @comment = Comment.find(params[:id])
    end
end