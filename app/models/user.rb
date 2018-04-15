class User < ApplicationRecord
  validates :name, presence: true
  validates :temp, inclusion: [true, false]

  has_many :participations

  has_many :documents,
    through: :participations,
    source: :document
end
