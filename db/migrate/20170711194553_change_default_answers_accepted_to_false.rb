class ChangeDefaultAnswersAcceptedToFalse < ActiveRecord::Migration
  def change
    change_column_default :answers, :accepted, false
  end
end
