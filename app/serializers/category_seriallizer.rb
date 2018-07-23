class CategorySerializer < ActiveModel::Serializer
  attributes :category_id, :content, :created_at, :updated_at
end
