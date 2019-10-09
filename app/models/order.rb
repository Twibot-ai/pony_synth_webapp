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

class Order < ApplicationRecord
  has_one_attached :synthesized_quote
end
