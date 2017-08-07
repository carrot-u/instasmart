class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :email, :oauth_token, :oauth_expires_at
end
