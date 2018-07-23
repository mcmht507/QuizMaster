require 'rails_helper'

RSpec.describe Answer, type: :model do
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
end
