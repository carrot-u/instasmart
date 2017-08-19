class Answers::CommentsController < CommentsController
	before_action :set_commentable

  private

    def set_commentable
    	logger.debug "params: #{params}"
      @commentable = Answer.find(params[:answer_id])
    end
end
