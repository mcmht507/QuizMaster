require 'rails_helper'

RSpec.describe User, type: :model do
  # Preparation
  let(:user) do
    User.new({
      user_id: user_id,
      name: name,
      email: email,
      password: password,
      role_type: role_type,
      access_token: access_token
    })
  end
  let(:user_id)    { "" }
  let(:name)    { "" }
  let(:email)    { "" }
  let(:password)    { "" }
  let(:role_type)    { "" }
  let(:access_token){ "" }
  # user test
  describe "user" do
    context "set user_id" do
      let(:user_id){"test_user"}
      it "set the user_id filed" do
        expect(user.user_id).to eq(user_id)
      end
    end

    context "set name" do
      let(:name){"test name"}
      it "set the name filed" do
        expect(user.name).to eq(name)
      end
    end

    context "set email" do
      let(:email){"test@test.com"}
      it "set the email filed" do
        expect(user.email).to eq(email)
      end
    end

    context "set password" do
      let(:password){"public"}
      it "set the password filed" do
        expect(user.password).to eq(password)
      end
    end

    context "set role_type" do
      let(:role_type){"public"}
      it "set the role_type filed" do
        expect(user.role_type).to eq(role_type)
      end
    end

    context "set access_token" do
      let(:access_token){"tokentokentokentoken"}
      it "set the access_token filed" do
        expect(user.access_token).to eq(access_token)
      end
    end
  end

  describe "user function" do
    pending "check controller test" do
      context "action update access_token" do
        let(:access_token){"tokentokentokentoken"}
        it "update the access_token filed" do
          except(user.update_access_token!).not_to eq(access_token)
        end
      end
    end
    pending "check controller test" do
      context "action update roletype" do
        let(:roletype){"public"}
        it "the roletype filed value is public" do
          except(user.update_access_roleType!).not_to eq(roletype)
        end
      end
    end
  end
end
