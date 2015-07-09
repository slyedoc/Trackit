require './app.rb'

use Rack::TryStatic,
  :root => File.expand_path('../public', __FILE__),
  :urls => %w[/], :try => ['.html', 'index.html', '/index.html']

use ActiveRecord::ConnectionAdapters::ConnectionManagement

#Grape::RackBuilder.setup do
#    logger Logger.new(STDOUT)
#    add_source_path File.expand_path('**/*.rb', 'C:\\Users\\towlesj\\WebstormProjects\\Trackit' )
#    reload_threshold 1 # Reload sources not often one second
#    force_reloading true # Force reloading for any environment (not just dev), useful for testing
#    mount 'API::Trackit'
#end

#run Grape::RackBuilder.boot!.application

run API::Trackit
