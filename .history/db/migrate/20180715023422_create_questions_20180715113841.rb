class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions, {:id =>false, :primary_key => :question_id} do |t|
      t.string :question_id
      t.references :user
      t.string :content
      t.intgert :category
      t.integer :answer null: false, default: ""
      t.string :answer_num
      t.timestamps
    end
  end
end
