require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  let(:headers) do
    {
      'Content-Type' => 'application/json',
      'Accept' => 'application/json'
    }
  end
  # answer test
  describe "access to answers#solve" do
    context "post answer" do
      it "create a answer" do
        headers = {
          'ACCEPT'
        }
        get answers_path
        expect(response).to have_http_status(200)
      end
    end
  end
end
