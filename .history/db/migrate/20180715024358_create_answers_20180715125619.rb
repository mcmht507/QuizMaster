class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers ,{:id =>false, :primary_key => :answer_id}do |t|
      t.primary_key :answer_id, :string
      t.references :user, foreign_key: true
      t.references :question, foreign_key: true
      t.string :content
      t.timestamps
    end
  end
end
