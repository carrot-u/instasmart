class QuestionsController < ApplicationController
  include ActionView::Helpers::TextHelper

  before_action :set_question, only: [:show, :edit, :update, :destroy, :like, :dislike, :unlike, :undislike]
  respond_to :html, :json

  def index
    @questions = Question.order("id DESC")


    if params[:sort_by] == 'most_comments'
      @questions= @questions.order("comments.length desc")
    end
    if params[:sort_by] == 'most_answers'
      @questions= @questions.order("answers.length desc")
    end
    if params[:sort_by] == 'most_voted'
      @questions= @questions.order("cached_votes_score desc")
    end
    if params[:sort_by] == 'most_views'
      @questions = @question.order("views_count desc")
    end

    respond_to do |format|
      format.json { render json: @questions }
      format.html do
        render component: 'QuestionsIndex', props: {
          questions: prepareArray(@questions),
          # user:      current_user && prepare(current_user)
        }, tag: 'div'
      end
    end

  end

  # New and create Questions
  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    logger.debug "Current user: #{current_user}"
    @question.user = current_user
    @question.tag_list = (params[:tag_list])
    @question.tag_list ||= []

    respond_to do |format|
      if @question.save!
        format.html { redirect_to questions_path }
        format.json { render json: @question}
      else
        format.html { render :new }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end
  #end of new/create


  def show
    @question = Question.find(params[:id])
    @question.increment(:views_count, 1)
    @question.save
    render json: @question
  end

  # change / edit / update
  def edit

  end

  def update
    
    respond_to do |format|
      logger.debug "format = #{format}"
      if @question.update(question_params)
        @question.tag_list = (params[:tag_list])
        @question.tag_list ||= []
        format.html { redirect_to @question }
        format.json { render json: @question}
      else
        format.html { render :edit }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    respond_to do |format|
      if @question.user == current_user
        @question.destroy
        format.html { questions_path }
        format.json { render json: "success!"}
      else
        format.html { questions_path }
        format.json { render result: "failure!"}
      end
   end
  end

  def like
    # @question.liked_by current_user
    @question.liked_by User.first
    render json: @question
  end

  def dislike
    @question.disliked_by current_user
    render json: @question
  end

  def unlike
    # @question.unliked_by current_user
    @question.unliked_by User.first
    render json: @question
  end

  def undislike
    @question.undisliked_by current_user
    render json: @question
  end

  private
    def set_question
      @question ||= begin
        question = params[:id] ? Question.find(params[:id]) : Question.new
        # if question_params && question_params.length > 0
        #   question.update_attributes(question_params)
        # end
      end
    end


    def prepareArray(array)
      ActiveModel::Serializer::CollectionSerializer.new(array, each_serializer: serializer(array))
    end

    def prepare(resource)
      serializer(resource).new(resource)
    end

    def serializer(resource)
      if resource.respond_to? :name
        "#{resource.name}Serializer".safe_constantize
      else
        "#{resource.class}Serializer".safe_constantize
      end
    end

    def question_params
      params.require(:question).permit(:summary, :body, :tag_list, :user)
    end
end
