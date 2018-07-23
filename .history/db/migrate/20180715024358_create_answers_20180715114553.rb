class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers ,{:id =>false, :primary_key => :question_id}do |t|
      t.string :question_id
      t.references :user
      t.string :content
      t.integer :category
      t.integer :answer
      t.timestamps
    end
  end
end
