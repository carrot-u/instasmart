class TagsController < ApplicationController

  def index
    @tags = Tag.all
    @taggings = Tagging.all
  end

  def show
    @tag = Tag.find(params[:id])
  end
end
