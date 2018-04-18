class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :guest, :bool, default: true
    add_index :users, :name
  end
end
