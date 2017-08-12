class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers, :dependent => :destroy
  has_many :comments, as: :commentable, :dependent => :destroy


  acts_as_votable
  acts_as_taggable
  acts_as_taggable_on :tags

  # For individual tag views
  scope :by_join_date, -> {
    order("created_at DESC")
  }
end
