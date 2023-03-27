class DropDetails < ActiveRecord::Migration[7.0]
  def change
    drop_table :details do |t|
      t.string :first_name
      t.string :last_name
      t.integer :phone
      t.string :gender
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
