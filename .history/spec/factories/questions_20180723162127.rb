FactoryBot.define do
  factory :question_1 class:Question do
    question_id 200
    content "test_question1"
    answer "one"
    user_id "test_admin"
    category_id 1
  end
  factory :question_2 class:Question do
    question_id 201
    content "test_question2"
    answer "two"
    user_id "test_admin"
    category_id 1
  end
end
