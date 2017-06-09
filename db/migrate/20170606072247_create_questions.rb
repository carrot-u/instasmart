class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.belongs_to :user, index: true
      t.text :body
      t.boolean :active
      t.timestamps
    end
  end
end
