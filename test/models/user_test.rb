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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
