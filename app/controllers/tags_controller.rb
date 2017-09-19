
class TagsController < ApplicationController
  def index
    @tags = ActsAsTaggableOn::Tag.all
  end

  def show
    @tag =  ActsAsTaggableOn::Tag.find(params[:id])
    @question = Question.tagged_with(@tag.name)
  end


  def search_suggestions
    if params[:search]
      @tags = ActsAsTaggableOn::Tag.where("name ILIKE ? AND taggings_count > 0", "%#{params[:search]}%")
      respond_to do |format|
        if @tags.length > 0
          resp = []
          @tags.each do |t| 
            resp.push({ :id => t.id, :name => t.name, :taggings_count => t.taggings_count })
          end
          format.json { render json: resp }
        else
          format.json { render json: nil }
        end
      end
    end
  end
end