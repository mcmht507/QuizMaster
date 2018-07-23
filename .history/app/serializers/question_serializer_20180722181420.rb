class QuestionSerializer < ActiveModel::Serializer
  # include ActiveModel::Serialization
  attributes :question_id, :user_id, :content, :category_id
  # has_many :answers
  # belongs_to :category
end
