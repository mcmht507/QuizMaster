FactoryBot.define do
  factory :user_1 ,class:User do
    user_id "test_public",
    name "test_public_name",
    email "test@public.com"
    password "265859ab"
  end
end
