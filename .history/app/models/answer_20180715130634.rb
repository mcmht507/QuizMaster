class Answer < ApplicationRecord
  belongs_to :questions
  belongs_to :users
end
