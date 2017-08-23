class CommentsController < ApplicationController
  before_action :set_comment, only: [:update]
  before_action :set_comment_for_edit_and_destroy, only: [:edit, :destroy]

  def new
  	@context = context
  	@comment = @context.comments.new
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
  	@context = context
  	@comment = @context.comments.new(comment_params)
    @comment.user_id = current_user.id

  	if @comment.save
  		redirect_to context_url(context), notice: "The comment has been successfully created."
  	end
  end

  def edit
  	@context = context
  	@comment = context.comments.find(params[:id])
  end

  def update
  	@context = context
    @comment = @context.comments.find(params[:id])
    if @comment.update_attributes(comment_params)
      redirect_to context_url(context), notice: "The comment has been updated"
    end
  end

  def destroy
    @comment = @commentable.comments.find(params[:id])
    @comment.destroy
   
    redirect_to context_url(context), notice: "The comment has been deleted"
  end

  private
    def comment_params
      params.require(:comment).permit(:commentable_type, :commentable_id, :body)
    end

    def context
      if params[:question_id]
        id = params[:question_id]
        Question.find(params[:question_id])
      elsif params[:answer_id]
        id = params[:answer_id]
        Answer.find(params[:answer_id])
      end
    end

    def context_url(context)
      if Question === context
        question_path(context)
      else
        question_path(Question.find(context.question_id))
      end
    end

    def set_comment_for_edit_and_destroy
      current_user.comments.find(params[:id])
    end
end
