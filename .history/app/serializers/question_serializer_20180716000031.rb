class QuestionSerializer < ActiveModel::Serializer
  attributes :question_id, :user_id, :content, :category_id, :category.content, :answer
end
