class AddCachedVotesToQuestions < ActiveRecord::Migration[5.1]
  def self.up
    add_column :questions, :cached_votes_total, :integer, :default => 0
    add_index  :questions, :cached_votes_total

    # Uncomment this line to force caching of existing votes
    Question.find_each(&:update_cached_votes)
  end

  def self.down
    remove_column :questions, :cached_votes_total
  end
end
