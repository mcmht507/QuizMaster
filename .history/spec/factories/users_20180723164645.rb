FactoryBot.define do
  factory :user_1 ,class:User do
    user_id "test_admin",
    name "test_admin_name",
    email "test@test.com"
    password "265859ab"
  end
end
