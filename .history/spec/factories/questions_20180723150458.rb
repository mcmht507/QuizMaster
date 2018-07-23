FactoryBot.define do
  factory :question do
    question_id 100
    user_id "test_admin"
    content "test question"
    category 1
    answer 1

    trait :with_question do
      question
    end

  end
end
