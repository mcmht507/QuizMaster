class QuestionSerializer < ActiveModel::Serializer
  include ActiveModel::Serialization
  attributes :question_id, :user_id, :content, :category_id,:answer_id
  # has_many :answers
  # belongs_to :category
  def answer_id
    object.answer_id ? object.answer_id : null
  end
end
