OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV["GOOGLE_CLIENT_ID"], ENV["GOOGLE_CLIENT_SECRET"],
    {
    	:image_aspect_ratio => "square",
    	:image_size => 50,
      client_options:
      {ssl:
        {ca_file: Rails.root.join("cacert.pem").to_s}
      },

      hd: 'instacart.com'
    }
end
