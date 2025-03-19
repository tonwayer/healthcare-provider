class CreateProviders < ActiveRecord::Migration[8.0]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :specialty
      t.string :npi
      t.string :location
      t.string :credentials

      t.timestamps
    end
    add_index :providers, :npi, unique: true
  end
end
