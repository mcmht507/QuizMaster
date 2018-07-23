FactoryBot.define do
  factory :answer do
    question_id 100
    answer_id 100
    user_id "test_admin"
    content "test_answer"
    is_correct 0
  end
end
