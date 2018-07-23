class QuestionSerializer < ActiveModel::Serializer
  attributes :question_id, :user_id, :content, :category_id,:asnwer_id
  # attribute :asnwer_id ,default: "new default"
end
