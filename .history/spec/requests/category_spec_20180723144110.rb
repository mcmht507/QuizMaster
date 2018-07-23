require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  before do
      FactoryBot.create :category
  end
  let(:headers) do
    {
      'Authorization' => 'test_admin:ZTZezU6AZs1CpE2xsLwz'
    }
  end
  # get category test
  describe "access to category#index" do
    context "get categories" do
      it "get categories status 200 and count" do
        get "/categories", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(Category.count).to eq json.count
      end
    end
  end
end
