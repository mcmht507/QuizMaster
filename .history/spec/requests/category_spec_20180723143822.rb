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
  describe "access to category#index" do
    context "get categories" do
      it "get categories" do
        get "/categories", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
      end
    end
  end
end
