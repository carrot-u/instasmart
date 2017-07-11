class ChangeColumnNameUsersPrimary < ActiveRecord::Migration
  def change
    rename_column :users, :primary, :accepted
  end
end
