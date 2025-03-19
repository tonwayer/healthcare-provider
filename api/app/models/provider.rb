class Provider < ApplicationRecord
  validates :name, presence: true 
  validates :npi, presence: true, uniqueness: true

  scope :active, -> { where(deactivated: false) }

  def deactivate
    update(deactivated: true)
  end

  def reactivate
    update(deactivated: false)
  end
end
