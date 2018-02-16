class AddPeriodToArticle < ActiveRecord::Migration[5.1]
  def change
  	add_reference :articles, :period, foreign_key: true
  end
end
