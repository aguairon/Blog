class Article < ApplicationRecord
	belongs_to :period, inverse_of: :articles
	has_many :comments, dependent: :destroy
	validates :title, presence: true,
					 length: { minimum: 5 }
	validates :text, presence: true,
					length: {minimum: 10 }
end
