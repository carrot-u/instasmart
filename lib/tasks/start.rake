task :start do
  exec 'foreman start -f Procfile.dev'
end
