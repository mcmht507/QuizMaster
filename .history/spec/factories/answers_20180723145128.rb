FactoryBot.define do
  factory :answer do
    answer_id 100
    question_id 100
    user_id "test_admin"
    content "test_answer"
    question
  end

  factory :shop, class: Question do
    question_id 100
    user_id "test_admin"
    content "test question"
    category "1"
    answer 1
    answer_num "MyString"
  end
end
