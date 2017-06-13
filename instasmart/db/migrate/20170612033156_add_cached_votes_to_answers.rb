class AddCachedVotesToAnswers < ActiveRecord::Migration[5.1]
  def self.up
    add_column :answers, :cached_votes_total, :integer, :default => 0
    add_index  :answers, :cached_votes_total

    # Uncomment this line to force caching of existing votes
    Question.find_each(&:update_cached_votes)
  end

  def self.down
    remove_column :answers, :cached_votes_total
  end
end
