class CommentsController < ApplicationController
  before_action :set_comment, only: [:edit, :update]

 def index
  # @commentable = find_commentable
  # @comments = @commentable.comments
  @comments = Comment.all
end

def new
  @comment = Comment.new
end

def create
  @commentable = find_commentable
  @comment = Comment.new(comment_params)
  @comment.user_id = current_user.id
  if @comment.save
    flash[:notice] = "Successfully created comment."
    redirect_to :id => nil
  else
    render :action => 'new'
  end
end

private

  def find_commentable
    params.each do |name, value|
      if name =~ /(.+)_id$/
        return $1.classify.constantize.find(value)
      end
    end
    nil
  end

    def comment_params
      params.permit(:body, :commentable_type, :commentable_id)
    end
end




