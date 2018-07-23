require 'rails_helper'

RSpec.describe "Questions", type: :request do
  # Preparation
  before do
      FactoryBot.create :question_1
      FactoryBot.create :question_2
  end
  let(:headers) do
    {
      'Authorization' => 'test_admin:test@test.com'
    }
  end
  # get question test
  describe "access to questions#index" do
    context "get questions" do
      it "check status 200 and count" do
        get "/questions", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(Question.count).to eq json.count
      end
    end
  end

  describe "access to questions#show" do
    context "get question" do
      it "check status 200 and id" do
        get "/questions/200", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(200).to eq json['question_id']
      end
    end
  end

  describe "access to questions#create" do
    context "create question" do
      it "check status 200 and id" do
        get "/questions", :params=>{question:{content:"spec test question",answer:"test_answer",category_id:1}},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        byebug
        expect(200).to eq json['question_id']
      end
    end
  end
end
