OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '900591684055-e0r83jm0vp62j3i1bse0eg7gvu7pr02t.apps.googleusercontent.com', 'JHafLEI-7DFmwXgLF89G3Bb2', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
