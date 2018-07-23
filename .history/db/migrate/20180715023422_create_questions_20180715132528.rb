class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions, {:id =>false, :primary_key => :question_id} do |t|
      t.primary_key :question_id, auto_increment: true
      t.references :user
      t.string :content
      t.integer :category
      t.string :answer
      t.timestamps
    end
  end
end
