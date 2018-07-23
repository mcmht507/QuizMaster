class QuestionSerializer < ActiveModel::Serializer
  attributes :question_id, :user_id, :content, :category, :answer
end
