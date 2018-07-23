require 'rails_helper'

RSpec.describe Question, type: :model do
  # Preparation
  let(:question) do
    Question.new({
      question_id: question_id,
      user_id: user_id,
      content: content,
      category_id: category_id
      answer: answer
    })
  end
  let(:question_id)    { "" }
  let(:user_id)    { "" }
  let(:content)    { "" }
  let(:category_id){ "" }
  let(:answer)    { "" }
  # question test
  describe "question" do
    context "set question_id" do
      let(:question_id){1}
      it "set the question_id filed" do
        expect(question.question_id).to eq(question_id)
      end
    end

    context "set question_id" do
      let(:question_id){1}
      it "set the question_id filed" do
        expect(question.question_id).to eq(question_id)
      end
    end

    context "set user_id" do
      let(:user_id){"test_user"}
      it "set the user_id filed" do
        expect(question.user_id).to eq(user_id)
      end
    end

    context "set content" do
      let(:content){"test_content"}
      it "set the content filed" do
        expect(question.content).to eq(content)
      end
    end

    context "set category_id" do
      let(:category_id){true}
      it "set the category_id filed" do
        expect(question.category_id).to eq(category_id)
      end
    end
  end
end
