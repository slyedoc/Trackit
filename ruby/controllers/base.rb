require_relative 'clients'
require_relative 'items'

module API
  class Base < Grape::API

    mount API::Clients
    mount API::Items
  end
end