class CreateParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :participations do |t|
      t.integer :user_id
      t.integer :document_id

      t.timestamps
    end
    add_index :participations, :user_id
    add_index :participations, :document_id
  end
end
