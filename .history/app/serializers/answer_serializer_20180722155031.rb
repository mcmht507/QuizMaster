class AnswerSerializer < ActiveModel::Serializer
  belongs_to :question, class_name: "Question", foreign_key: "question_id"
  has_many :answers, class_name:'answers',optional: true

  attributes :answer_id, :question_id, :user_id, :content, :answer_id, :is_correct
end
