class Question < ApplicationRecord
  belongs_to :user, required: false
  has_many :answers, dependent: :destroy
  has_many :comments, dependent: :destroy

  acts_as_votable



  # belongs_to :author, foreign_key: 'user_id', class_name: 'User',  required: false
end
