OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
    before_action: custom_build_access_token

  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"], #stored in config/application.yml as part of gitignore
    {
    	:image_aspect_ratio => "square",
    	:image_size => 50,
      client_options:
      {ssl:
        {ca_file: Rails.root.join("cacert.pem").to_s}
      },
      client_id: ENV["GOOGLE_CLIENT_ID"]
      :provider_ignores_state => true,
      hd: 'instacart.com'
    }

    def custom_build_access_token
      r_body = JSON.parse( request.body.read ) if request.xhr?
      if request.xhr? && r_body["code"]
        verifier = r_body["code"]
        client.auth_code.get_token(verifier, { :redirect_uri => 'postmessage'}.merge(token_params.to_hash(:symbolize_keys => true)),
                                         deep_symbolize(options.auth_token_params || {}))
      elsif verify_token(r_body['id_token'], r_body['access_token'])
        ::OAuth2::AccessToken.from_hash(client, request.params.dup)
      else
        orig_build_access_token
      end
    end
end
