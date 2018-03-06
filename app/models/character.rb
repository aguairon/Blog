class Character < ApplicationRecord
  belongs_to :period, inverse_of: :characters
end
