require 'rails_helper'

RSpec.describe User, type: :model do
  # Preparation
  let(:answer) do
    Answer.new({
      answer_id: answer_id,
      question_id: question_id,
      user_id: user_id,
      content: content,
      is_correct: is_correct
    })
  end
  let(:answer_id)    { "" }
  let(:question_id)    { "" }
  let(:user_id)    { "" }
  let(:content)    { "" }
  let(:is_correct){ "" }
  # answer test
  describe "answer" do
    context "set answer_id" do
      let(:answer_id){1}
      it "set the answer_id filed" do
        expect(answer.answer_id).to eq(answer_id)
      end
    end

    context "set question_id" do
      let(:question_id){1}
      it "set the question_id filed" do
        expect(answer.question_id).to eq(question_id)
      end
    end

    context "set user_id" do
      let(:user_id){"test_user"}
      it "set the user_id filed" do
        expect(answer.user_id).to eq(user_id)
      end
    end

    context "set content" do
      let(:content){"test_content"}
      it "set the content filed" do
        expect(answer.content).to eq(content)
      end
    end

    context "set is_correct" do
      let(:is_correct){true}
      it "set the is_correct filed" do
        expect(answer.is_correct).to eq(is_correct)
      end
    end
  end
end
