class Character < ApplicationRecord
  belongs_to :period, inverse_of: :characters
  validates :name, presence: true,
  				   length: { minimum: 5 }
  validates :body, presence: true,
  				   length: { minimum: 5 }
end
