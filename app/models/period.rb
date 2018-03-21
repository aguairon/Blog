class Period < ApplicationRecord
	has_many :articles, inverse_of: :period
	has_many :characters, inverse_of: :period
	validates :title, presence: true, length: {minimum: 5}
end
