class AnswerSerializer < ActiveModel::Serializer
  attributes :answer_id, :question_id, :user_id, :content, :answer_id, :is_correct
end
