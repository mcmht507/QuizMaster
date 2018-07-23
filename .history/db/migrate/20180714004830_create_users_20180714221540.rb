class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :created_user
      t.string :updated_user
      t.timestamps null: false
    end
  end
end
