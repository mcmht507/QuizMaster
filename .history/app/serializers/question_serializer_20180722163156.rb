class QuestionSerializer < ActiveModel::Serializer
  attributes :question_id, :user_id, :content, :category_id
  has_many :answers, class_name:'Answer'
  belongs_to :category, class_name:'Category'
end
