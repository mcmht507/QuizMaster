class CategorySerializer < ActiveModel::Serializer
  attributes :question_id, :user_id, :content, :category_id, :answer
end
