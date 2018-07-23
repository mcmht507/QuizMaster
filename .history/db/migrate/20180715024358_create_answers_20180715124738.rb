class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers ,{:id =>false, :primary_key => :answer_id}do |t|
      t.string :answer_id
      t.references :user
      t.string :content
      t.integer :category
      t.integer :answer
      t.timestamps
    end
  end
end
