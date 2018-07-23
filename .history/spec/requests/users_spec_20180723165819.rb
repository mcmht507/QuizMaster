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
  let(:user_id) { "test_admin" }
  # get user test
  describe "access to questions#show" do
    context "get user" do
      it "check status 200 and user_id" do
        get "/users/"+user_id, :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(user_id).to eq json['user_id']
      end
    end
  end

  describe "access to users#myself" do
    context "get login user" do
      it "check status 200 and user_id" do
        get "/users/myself", :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(user_id).to eq json['user_id']
      end
    end
  end

  describe "access to users#create" do
    context "get login user" do
      it "check status 200 and user_id" do
        post "/users", :params=>{
          user:{
            user_id:"post_user",
            name:"post_user_name",
            email:"test@test.post.com",
            password:"123456789abc"
          }},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect("post_user").to eq json['user_id']
      end
    end
  end

    # get user test
  describe "access to questions#show" do
    context "get user" do
      it "check status 200 and user_id" do
        get "/users/"+user_id, :params=>{},:headers=>headers
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(user_id).to eq json['user_id']
      end
    end
  end

end
