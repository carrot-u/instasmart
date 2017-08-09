class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :oauth_token, :oauth_expires_at

  has_many :questions
  has_many :answers
  has_many :comments
end
