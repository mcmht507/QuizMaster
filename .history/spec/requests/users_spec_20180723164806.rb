require 'rails_helper'

RSpec.describe "Users", type: :request do
  before do
      FactoryBot.create :user_1
  end
  let(:headers) do
    {
      'Authorization' => 'test_admin:test@test.com'
    }
  end
  # get question test
  describe "access to questions#show" do
    context "get users" do
      it "check status 200 and count" do
        get "/users", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(User.count).to eq json.count
      end
    end
  end
end
