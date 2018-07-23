class QuestionSerializer < ActiveModel::Serializer
  belongs_to :category, optional: true
  attributes :question_id, :user_id, :content, :category_id
end
