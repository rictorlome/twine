class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.boolean :temp, null: false, default: true

      t.timestamps
    end
  end
end
