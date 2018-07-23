class QuestionSerializer < ActiveModel::Serializer
  belongs_to :category, optional: true
  belongs_to :answers, optional: true
  attributes :question_id, :user_id, :content, :category_id
end
