class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question_id
      t.string :user_id
      t.string :content
      t.intgert :category
      t.string :answer
      t.string :answer_num

      t.timestamps
    end
  end
end
