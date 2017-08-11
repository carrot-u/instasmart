module OmniAuth
  module Strategies
    class GoogleOauth2
      def get_access_token(request)
        raise "request '#{request}'"
        json = JSON.parse(request.body.read)
        json = json.dup.deep_transform_keys { |key| key.to_s.underscore }
        raise "invalid token '#{json['access_token']}'" unless verify_token(json['access_token'])
        ::OAuth2::AccessToken.from_hash(client, json)
      end
    end
  end
end