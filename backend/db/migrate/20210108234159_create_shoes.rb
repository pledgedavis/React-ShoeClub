class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string "name"
      t.integer "size"
      t.integer "price"
  
      t.timestamps
    end
  end
end
