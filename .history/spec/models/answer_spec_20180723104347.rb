require 'rails_helper'

RSpec.describe Answer, type: :model do
  # 前準備
  let(:answer) do
    Answer.new({
      question_id: question_id,
      user_id: user_id,
      content: content,
      is_correct: is_correct
    })
  end
  let(:question_id)    { "" }
  let(:user_id)    { "" }
  let(:content)    { "" }
  let(:is_correct){ "" }
  # question
  describe "answer" do
    context "set user_id" do
      let(:user_id){"test_user"}
      it "set the user_id filed" do
        expect(answer.user_id).to eq(user_id)
      end
    end

    context "set content" do
      let(:content){"test_content"}
      it "set the content filed" do
        expect(answer.user_id).to eq(user_id)
      end
    end
  end
end
