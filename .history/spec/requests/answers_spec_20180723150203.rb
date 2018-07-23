require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  before do
      FactoryBot.create :question
      FactoryBot.create :answer
  end
  let(:headers) do
    {
      'Authorization' => 'test_admin:ZTZezU6AZs1CpE2xsLwz'
    }
  end
  # answer test
  describe "access to answers#solve" do
    context "post answer" do
      it "create a answer" do
        post '/answers/solve', :params=>{answer:{question_id:1,content:"test_answer"}},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "access to answers#solve" do
    context "update answer" do
      it "update a answer" do
        post '/answers/solve', :params=>{answer:{question_id:1,content:"test_answer"}},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "access to answers#solve" do
    context "correct answer" do
      it "update a answer" do
        post '/answers/solve', :params=>{answer:{question_id:100,content:"test_answer"}},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end
end
