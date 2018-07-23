class QuestionSerializer < ActiveModel::Serializer
  # belongs_to :category, class_name:'Category', optional: true
  has_many :answers, class_name:'Answer',optional: true
  attributes :question_id, :user_id, :content, :category_id
  attribute :asnwer_id ,default: "new default"
end
