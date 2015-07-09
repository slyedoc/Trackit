RACK_ENV = (ENV['RACK_ENV'] || 'development').to_sym
require 'bundler'
Bundler.require(:default, RACK_ENV)
require "pp"

Dir[File.join(".", "models/*.rb")].each do |f|
  require f
end

require_relative 'controllers/base'


module API
  class Trackit < Grape::API

    Grape::ActiveRecord.database_file = 'config/database.yml'
    include Grape::ActiveRecord::Extension

    add_swagger_documentation base_path: "/api", hide_documentation_path: true

    mount API::Base
  end
end



