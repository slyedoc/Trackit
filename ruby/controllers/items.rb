module API

    class Items < Grape::API
      version 'v1'
      format :json

      resource :items do
        desc "Return list of items"
        get do
          Item.all
        end
      end
    end

end