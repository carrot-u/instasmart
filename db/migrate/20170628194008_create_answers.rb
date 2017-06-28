class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
    	t.text :response
    	t.references :user, index: true, foreign_key: true
    	t.references :question, foreign_key: true
    	t.timestamps null: false
    end
  end
end
