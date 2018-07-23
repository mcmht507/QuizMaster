class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions, {:id =>false, :primary_key => :question_id} do |t|
      t.primary_key :question_id, auto_increment: true
      t.string :user_id, index: true
      t.string :content
      t.integer :category
      t.string :answer
      t.string :created_user
      t.string :updated_user
      t.timestamps
    end
  end
end
