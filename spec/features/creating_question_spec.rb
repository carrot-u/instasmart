require 'rails_helper'

RSpec.feature "Creating Questions" do

  before do
    @john = User.create!(first_name: "John", last_name: "Doe", email: "john.doe@instacart.com", active: true)
  end

  scenario "A user creates a question" do
    visit "/"

    click_link "Ask a Question"

    fill_in "Question", with: "What is Instasmart?"
    fill_in "Details", with: "I'm completely new to this!"
    fill_in "Tags", with: "question instasmart"

    click_button "Save"

    expect(page).to have_content("Question has been created")
    expect(page.current_path).to eq(question_path)
  end
end
