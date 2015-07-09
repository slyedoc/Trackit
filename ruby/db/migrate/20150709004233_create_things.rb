class CreateThings < ActiveRecord::Migration
  def change

    create_table :clients do |t|
      t.string :name
    end

    create_table :users do |t|
      t.string :email
      t.string :name
    end
    add_reference :users, :client, index: true, foreign_key: true

    create_table :items do |t|
      t.string :name
    end
    add_reference :items, :client, index: true, foreign_key: true

  end
end
