class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments, as: :commentable


  acts_as_votable
  acts_as_taggable
  acts_as_taggable_on :tags

  # For individual tag views
  scope :by_join_date, -> {
    order("created_at DESC")
  }
end
