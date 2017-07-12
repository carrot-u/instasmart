class ChangeDefaultAnswersAccepted < ActiveRecord::Migration
  def change
    change_column_default :answers, :accepted, true
  end
end
