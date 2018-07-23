require 'rails_helper'

RSpec.describe Category, type: :model do
  # Preparation
  let(:category) do
    Category.new({
      category_id: category_id,
      content: content,
    })
  end
  let(:category_id)    { "" }
  let(:content)    { "" }
  # category
  describe "category" do
    context "set category_id" do
      let(:category_id){1}
      it "set the category_id filed" do
        expect(category.category_id).to eq(category_id)
      end
    end

    context "set question_id" do
      let(:question_id){1}
      it "set the question_id filed" do
        expect(category.question_id).to eq(question_id)
      end
    end

    context "set user_id" do
      let(:user_id){"test_user"}
      it "set the user_id filed" do
        expect(category.user_id).to eq(user_id)
      end
    end

    context "set content" do
      let(:content){"test_content"}
      it "set the content filed" do
        expect(category.user_id).to eq(user_id)
      end
    end

    context "set is_correct" do
      let(:is_correct){true}
      it "set the is_correct filed" do
        expect(category.is_correct).to eq(is_correct)
      end
    end
  end
end
