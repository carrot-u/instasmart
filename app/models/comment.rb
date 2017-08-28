class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true, dependent: :destroy
	belongs_to :user

  acts_as_votable
end
