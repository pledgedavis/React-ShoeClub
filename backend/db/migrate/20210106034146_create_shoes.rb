class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.integer :size
      t.integer :price
      t.string :image
      t.integer :brand_id
      t.integer :user_id

      t.timestamps
    end
  end
end

