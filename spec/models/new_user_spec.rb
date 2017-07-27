require "rails_helper"

RSpec.describe User, :type => :model do

  it "finds the newest user" do
    flanagan = User.create!(first_name: "Jeremy", last_name: "Flanagan", email: "jeremy.flanagan@instacart.com")

    expect(User.last).to eq(flanagan)
  end
end
