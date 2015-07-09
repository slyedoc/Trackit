
module API
    class Clients < Grape::API
      version 'v1'
      format :json

      resource :clients do
        desc "Return list of clients"
        get do
          Client.all # obviously you never want to call #all here
        end
      end
    end
end