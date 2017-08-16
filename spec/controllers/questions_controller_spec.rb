require 'rails_helper'

RSpec.describe QuestionsController, :type => :controller do
  describe "GET #index" do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "loads all of the questions into @questions" do
      question1 = Question.create!(summary: "This is my question", body: "This is body of my question", user_id: 10)
      get :index

      expect(Question.last).to eq(question1)
    end
  end
end
