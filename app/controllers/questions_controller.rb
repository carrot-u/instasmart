class QuestionsController < ApplicationController
  include ActionView::Helpers::TextHelper

  before_action :set_question, only: [:show, :update, :like, :dislike, :unlike, :undislike]
  before_action :set_question_for_edit_and_destroy, only: [:edit, :destroy]
  respond_to :html, :json
  before_action :current_user


  def index
    @questions = Question.order("id DESC")

    respond_to do |format|
      format.json { render json: @questions }
    end
  end

  def search
    @questions = Question.order("id DESC")
    if params[:search]
      @questions = Question.search(params[:search]).order("created_at DESC") + Question.tagged_with(params[:search]).order("created_at DESC")
      @questions.sort_by! { |q| q.created_at}.reverse!
    end

    respond_to do |format|
      format.json { render json: @questions }
    end
  end

  def search_suggestions
    if params[:search]
      @questions = Question.search_summary(params[:search]).order("created_at DESC")
      respond_to do |format|
        if @questions.length > 0
          resp = []
          @questions.each do |q| 
            resp.push({ :id => q.id, :summary => q.summary })
          end
          format.json { render json: resp }
        else
          format.json { render json: nil }
        end
      end
    end
  end

  def tagged_by
    @questions = Question.tagged_with(params[:tag])
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
    if @question.user == current_user
      @question.destroy
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

    def set_question_for_edit_and_destroy
      @question = current_user.questions.find(params[:id])
    end
end
