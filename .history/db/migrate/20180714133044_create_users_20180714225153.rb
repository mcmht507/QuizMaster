class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users , [:id=>false, :primary_key => "user_id", :force => true] do |t|
      t.string :user_id
      t.string :name
      t.string :email
      t.string :password
      t.string :created_user
      t.string :updated_user
      t.timestamps null: false
    end
    # execute "ALTER TABLE users ADD PRIMARY KEY (user_id);"
  end
end
