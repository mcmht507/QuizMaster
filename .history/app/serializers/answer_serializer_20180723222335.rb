class AnswerSerializer < ActiveModel::Serializer
  attributes :answer_id, :question_id, :user_id, :content, :is_correct,:created_at, :updated_a
end
