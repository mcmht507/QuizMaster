class QuestionSerializer < ActiveModel::Serializer
  belongs_to :category, optional: true
  # has_many :answers, class_name:'answers',optional: true
  attributes :question_id, :user_id, :content, :category_id
  # attr_reader :answer_id,:is_correct
  def set_answer_id
    self.answer_id = 1
  end
  byebug
end
