class RemoveAcceptedFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :accepted, :boolean
  end
end
