class QuestionsController < ApplicationController
  include ActionView::Helpers::TextHelper

  before_action :set_question, only: [:show, :edit, :update, :destroy, :like, :dislike, :unlike, :undislike]
  respond_to :html, :json
  before_action :current_user


  def index
    @questions = Question.order("id DESC")


    # if params[:sort_by] == 'most_comments'
    #   @questions= @questions.order("comments.length desc")
    # end
    # if params[:sort_by] == 'most_answers'
    #   @questions= @questions.order("answers.length desc")
    # end
    # if params[:sort_by] == 'most_voted'
    #   @questions= @questions.order("cached_votes_score desc")
    # end
    # if params[:sort_by] == 'most_views'
    #   @questions = @question.order("views_count desc")
    # end
    respond_to do |format|
      format.json { render json: @questions }
    end

  end

  # New and create Questions
  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    @question.user = current_user
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

    respond_to do |format|
      format.json { render json: @question }
    end
  end
  # change / edit / update
  def edit
  end

  def update
    
    respond_to do |format|
      if @question.update(question_params)
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
    @question.liked_by current_user
    # @question.liked_by User.first
    render json: @question
  end

  def unlike
    @question.unliked_by current_user
    # @question.unliked_by User.first
    render json: @question
  end

  private
    def set_question
      @question ||= begin
        question = params[:id] ? Question.find(params[:id]) : Question.new
      end
    end

    def question_params
      params.permit(:summary, :body, :tag_list)
    end
end

