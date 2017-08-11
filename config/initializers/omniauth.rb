OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do

  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"], #stored in config/application.yml as part of gitignore
    {
    	:image_aspect_ratio => "square",
    	:image_size => 50,
      client_options:
      {ssl:
        {ca_file: Rails.root.join("cacert.pem").to_s}
      },
      client_id: ENV["GOOGLE_CLIENT_ID"],
      :provider_ignores_state => true,
      hd: 'instacart.com'
    }


end
