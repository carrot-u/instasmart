class CommentsController < ApplicationController
  def new
  	@context = context
  	@comment = @context.comments.new
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
      answer_path(context)
    end
  end
end
