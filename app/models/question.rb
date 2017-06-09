class Question < ApplicationRecord
  belongs_to :user, required: false
  has_many :answers, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :tag_taggings, class_name: 'ActsAsTaggableOn::Tagging'

  acts_as_taggable

  acts_as_votable


  # belongs_to :author, foreign_key: 'user_id', class_name: 'User',  required: false
end
