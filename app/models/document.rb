# == Schema Information
#
# Table name: documents
#
#  id         :integer          not null, primary key
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  path       :string
#

class Document < ApplicationRecord
  has_many :participations

  has_many :users,
    through: :participations,
    source: :user

  before_create :generate_path
  before_create :set_body

  def set_body
    self.body = "Write code here"
  end

  def generate_path
    self.path = SecureRandom.urlsafe_base64[0..10]
  end
end
