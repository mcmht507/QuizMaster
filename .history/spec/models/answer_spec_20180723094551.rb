require 'rails_helper'

RSpec.describe Answer, type: :model do
 let(:answer) do
    Answer.new({
      question_id: 1,
      user_id: 'test_user',
      content: 'test_answer',
      is_correct:false
    })
  end
end
