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
    content "one"
    category ""
    answer "MyString"
    answer_num "MyString"
  end
end
