class AddDefaultValueToPrimary < ActiveRecord::Migration
  def change
    change_column :users, :primary, :boolean, default: false
  end
end
