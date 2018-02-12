class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :text
      t.references :period, foreign_key: true

      t.timestamps
    end
  end
end
