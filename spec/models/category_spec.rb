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
  # category test
  describe "category" do
    context "set category_id" do
      let(:category_id){1}
      it "set the category_id filed" do
        expect(category.category_id).to eq(category_id)
      end
    end

    context "set content" do
      let(:content){"test_content"}
      it "set the content filed" do
        expect(category.content).to eq(content)
      end
    end
  end
end
