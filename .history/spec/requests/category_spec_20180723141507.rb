require 'rails_helper'

RSpec.describe "Answers", type: :request do
  # Preparation
  let(:headers) do
    {
      'Authorization' => 'test_admin:ZTZezU6AZs1CpE2xsLwz'
    }
  end
  describe "GET /questions" do
    context "get questions" do
      it "get questions" do
        get questions_path
        expect(response).to have_http_status(200)
      end
    do
  end
  # answer test
  # describe "access to answers#solve" do
  #   context "post answer" do
  #     it "create a answer" do
  #       post '/answers/solve', params:{question_id:1,content:"test_answer"},headers: headers
  #       expect(response).to have_http_status(200)
  #     end
  #   end
  # end
end
