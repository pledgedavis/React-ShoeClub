class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.string :user_email
      t.string :user_address 
      t.string :user_card_number
       t.integer :user_id
      t.timestamps
    end
  end
end
