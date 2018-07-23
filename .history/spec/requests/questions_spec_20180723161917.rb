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
  # get category test
  describe "access to questions#index" do
    context "get questions" do
      it "get questions status 200 and count" do
        get "/questions", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(Questions.count).to eq json.count
      end
    end
  end
end
