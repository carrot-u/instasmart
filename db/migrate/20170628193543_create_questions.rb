class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :summary
      t.text :body
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
