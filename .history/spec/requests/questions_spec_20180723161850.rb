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
    context "get categories" do
      it "get categories status 200 and count" do
        get "/categories", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(Category.count).to eq json.count
      end
    end
  end
  describe "GET /questions" do
    it "works! (now write some real specs)" do
      get questions_path
      expect(response).to have_http_status(200)
    end
  end
end
