class Question < ActiveRecord::Base
  belongs_to :user
  has_many :answers
  has_many :comments
end
