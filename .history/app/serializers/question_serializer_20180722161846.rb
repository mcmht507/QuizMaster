class QuestionSerializer < ActiveModel::Serializer
  include AnswerSerializer
  belongs_to :category, serializer: CategorySerializer
  has_many :answers, serializer: AnswerSerializer
  attributes :question_id, :user_id, :content, :category_id
  # attribute :asnwer_id ,default: "new default"
end
