class Tag < ApplicationRecord
  has_many :taggings
  has_many :questions, through: :taggings
end
