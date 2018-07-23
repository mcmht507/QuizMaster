FactoryBot.define do
  factory :question do
    question_id 200
    user_id "test_admin"
    content "test question"
    category 1
    answer 1
  end
end
