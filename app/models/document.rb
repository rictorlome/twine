class Document < ApplicationRecord
  has_many :participations

  has_many :users,
    through: :participations,
    source: :user
end
