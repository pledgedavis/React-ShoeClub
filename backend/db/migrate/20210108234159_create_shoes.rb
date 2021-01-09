class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string "name"
      t.integer "size"
      t.integer "price"
      t.integer "brand_id"
      t.timestamps
    end
  end
end
