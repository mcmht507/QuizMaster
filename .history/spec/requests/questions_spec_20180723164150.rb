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
        post "/questions", :params=>{question:{content:"spec test question",answer:"test_answer",category_id:1}},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect("spec test question").to eq json['content']
      end
    end
  end

  describe "access to questions#update" do
    context "create question" do
      it "check status 200 and id" do
        patch "/questions/200", :params=>{question:{content:"spec test update question",answer:"test_update_answer",category_id:2}},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect("spec test update question").to eq json['content']
      end
    end
  end

  describe "access to questions#destroy" do
    context "destroy question" do
      it "check status 200 and id" do
        count = 0
        destroy "/questions/200", :params=>{},:headers=>headers
        expect(response).to have_http_status(204)
      end
    end
  end
end
