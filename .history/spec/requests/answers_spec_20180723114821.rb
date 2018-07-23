require 'rails_helper'

RSpec.describe "Answers", type: :request do
  describe "access to answers#solve" do
    context "post answer" do
      it "create a answer" do
        get answers_path
        expect(response).to have_http_status(200)
      end
    end
  end
end
