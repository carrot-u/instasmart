OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  # stored in config/application.yml as part of gitignore
  gauth_client_id = ENV["INSTASMART_GAUTH_CLIENT_ID"]
  gauth_client_secret = ENV["INSTASMART_GAUTH_CLIENT_SECRET"]
  gauth_config = {
      image_aspect_ratio: "square",
      image_size: 500,
      client_id: gauth_client_id,
      hd: "instacart.com",
      access_type: "offline",
      client_options:
      {ssl:
        {ca_file: Rails.root.join("cacert.pem").to_s}
      }
      #:provider_ignores_state => true,
  } 

  provider :google_oauth2, gauth_client_id, gauth_client_secret, gauth_config


  provider :heroku, gauth_client_id, gauth_client_secret, gauth_config
end

