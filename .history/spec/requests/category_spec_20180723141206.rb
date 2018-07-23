require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  let(:headers) do
    {
      'Authorization' => 'test_admin:ZTZezU6AZs1CpE2xsLwz'
    }
  end
  describe "GET /questions" do
    it "works! (now write some real specs)" do
      get questions_path
      expect(response).to have_http_status(200)
    end
  end
end
