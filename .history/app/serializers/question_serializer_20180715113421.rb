class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :user_id, :content, :category, :answer, :answer_num
end
