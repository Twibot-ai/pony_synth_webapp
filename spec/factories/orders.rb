# == Schema Information
#
# Table name: orders
#
#  id         :bigint           not null, primary key
#  phrase     :string
#  ws_token   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryBot.define do
  factory :order do
    phrase { "MyString" }
    ws_token { "MyString" }
  end
end
