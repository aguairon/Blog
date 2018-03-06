class Period < ApplicationRecord
	has_many :articles, inverse_of: :period
	has_many :characters, inverse_of: :period
end
