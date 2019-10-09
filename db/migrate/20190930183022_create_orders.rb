class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :phrase
      t.string :ws_token

      t.timestamps
    end
  end
end
