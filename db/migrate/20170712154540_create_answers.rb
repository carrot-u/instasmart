class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :user, index: true, foreign_key: true
      t.references :question, index: true, foreign_key: true
      t.text :response
      t.boolean :accepted

      t.timestamps null: false
    end
  end
end
