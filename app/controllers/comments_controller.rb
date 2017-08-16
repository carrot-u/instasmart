class CommentsController < ApplicationController
  before_action :set_comment, only: [:edit, :update]

  def show
    @comment = Comment.find(params[:id])
  end

  def create
      @comment = @commentable.comments.new comment_params
      @comment.user = current_user
      @comment.save
      respond_to do |format|
        if @commentable.class.name == "Question"
          format.html { redirect_to @commentable }
          format.json { render json: @commentable }
        else
          format.html { redirect_to @question }
          format.json { render json: @commentable.errors, status: :unprocessable_entity }
        end
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

  def unlike
    @comment.unliked_by current_user
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


# questions/comments_controller.rb
# class Questions::CommentsController < CommentsController
#   before_action :set_commentable

#   private


#     def set_commentable
#       @commentable = Question.find(params[:question_id])
#     end
# end

# answers/comments_controller.rb
# class Answers::CommentsController < CommentsController
#   before_action :set_commentable




#   private

#     def set_commentable
#       logger.debug "params: #{params}"
#       @commentable = Answer.find(params[:answer_id])
#     end
# end

