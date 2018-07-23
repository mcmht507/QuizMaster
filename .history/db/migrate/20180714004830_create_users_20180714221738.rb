class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users {:id => false} do |t|
      t.string :user_id primary_key: true null: false
      t.string :name
      t.string :email
      t.string :password
      t.string :created_user
      t.string :updated_user
      t.timestamps null: false
    end
  end
end
