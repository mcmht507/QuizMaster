require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  before do
      FactoryBot.create :answer
  end
  let(:headers) do
    {
      'Authorization' => 'test_admin:test@test.com'
    }
  end
  # answer test
  describe "access to answers#solve" do
    context "post answer" do
      it "create a answer" do
        post '/answers/solve', :params=>{answer:{question_id:100,content:"test_answer"}},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "access to answers#solve" do
    context "update answer" do
      it "update a answer" do
        post '/answers/solve', :params=>{answer:{question_id:100,content:"test_answer"}},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "access to answers#solve" do
    context "correct answer" do
      it "update a answer" do
        post '/answers/solve', :params=>{answer:{question_id:100,content:"1"}},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(true).to eq json['is_correct']
      end
    end
  end

  describe "access to answers#solve" do
    context "string correct answer" do
      it "update a answer" do
        post '/answers/solve', :params=>{answer:{question_id:100,content:"one"}},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(true).to eq json['is_correct']
      end
    end
  end
end
