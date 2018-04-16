class AddPathToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :path, :string
    add_index :documents, :path, unique: true
  end
end
