OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["INSTASMART_GAUTH_CLIENT_ID"], ENV["INSTASMART_GAUTH_CLIENT_SECRET"], #stored in config/application.yml as part of gitignore
    {
    	:image_aspect_ratio => "square",
    	:image_size => 50,
      :client_id => ENV["INSTASMART_GAUTH_CLIENT_ID"],
      client_options:
      {ssl:
        {ca_file: Rails.root.join("cacert.pem").to_s}
      },

      hd: 'instacart.com'
    }
end
