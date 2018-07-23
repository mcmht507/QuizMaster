FactoryBot.define do
  factory :answer do
    answer_id 100
    question_id 100
    user_id "test_admin"
    content "test_answer"
    is_correct 0

    trait :with_question do
      question
    end
  end

  factory :with_question, class: Question do
    answer 1
    user_id 'test_admin'
    category_id 1
  end
end
