class AddViewsCountToQuestions < ActiveRecord::Migration
  def change
  	add_column :questions, :views_count, :integer, default: 0
  end
end
