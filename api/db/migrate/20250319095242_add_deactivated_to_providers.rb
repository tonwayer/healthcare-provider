class AddDeactivatedToProviders < ActiveRecord::Migration[8.0]
  def change
    add_column :providers, :deactivated, :boolean
  end
end
