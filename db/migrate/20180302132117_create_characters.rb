class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :body
      t.references :period, foreign_key: true

      t.timestamps
    end
  end
end
