class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories ,{:id =>false, :primary_key => :category_id} do |t|
    create_table :answers ,{:id =>false, :primary_key => :answer_id}do |t|
      t.primary_key :category_id, auto_increment: true
      t.string :content
      t.timestamps
    end
      t.timestamps
    end
  end
end
