class RemoveReferenceInComments < ActiveRecord::Migration
  def change
    remove_reference(:comments, :user, index:true, foreign_key: true)
    remove_reference(:comments, :question, index:true, foreign_key: true)
    remove_reference(:comments, :answer, index:true, foreign_key: true)
  end
end
