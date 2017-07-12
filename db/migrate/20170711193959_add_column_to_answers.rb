class AddColumnToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :accepted, :boolean
  end
end
