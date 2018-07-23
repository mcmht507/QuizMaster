class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions, {:id =>false, :primary_key => :question_id} do |t|
      t.primary_key :question_id, AUTO_INCREMENT
      t.references :user
      t.string :content
      t.integer :category
      t.integer :answer
      t.timestamps
    end
  end
end
