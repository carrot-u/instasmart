class User < ActiveRecord::Base
  has_many :questions
  has_many :answers
  has_many :comments

  acts_as_voter
  acts_as_tagger

  def self.default_scope
    where(active: true).order("name ASC")
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.image = auth.info.image
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
end
