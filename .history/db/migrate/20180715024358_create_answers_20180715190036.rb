class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers ,{:id =>false, :primary_key => :answer_id}do |t|
      t.primary_key :answer_id, auto_increment: true
      t.string :user_id, index: true
      t.string :question, index: true
      t.string :content
      t.boolean :is_correct
      t.string :created_user
      t.string :updated_user
      t.timestamps
    end
  end
end
