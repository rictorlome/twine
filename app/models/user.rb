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
end
