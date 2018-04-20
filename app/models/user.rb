# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  authentication_token :string(30)
#  name                 :string           not null
#  guest                :boolean          default(TRUE)
#

class User < ApplicationRecord
  validates :name, presence: true
  validates :guest, inclusion: [true, false]

  after_initialize :ensure_authentication_token

  def generate_authentication_token
    SecureRandom.urlsafe_base64(20)
  end

  def reset_authentication_token!
    self.authentication_token = self.generate_authentication_token
    self.save!
    self.authentication_token
  end

  def ensure_authentication_token
    self.authentication_token ||= self.generate_authentication_token
  end

end
