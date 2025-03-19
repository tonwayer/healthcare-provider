require 'rails_helper'

RSpec.describe Provider, type: :model do
  it "is valid with all required attributes" do
    provider = Provider.new(name: "Dr. Alice", specialty: "Cardiology", npi: "1234567890", location: "New York", credentials: "MD")
    expect(provider).to be_valid
  end

  it "requires a name" do
    provider = Provider.new(npi: "1234567890")
    expect(provider).not_to be_valid
  end

  it "requires a unique NPI" do
    Provider.create!(name: "Dr. A", specialty: "Pediatrics", npi: "1112223334")
    duplicate = Provider.new(name: "Dr. B", specialty: "Pediatrics", npi: "1112223334")
    expect(duplicate).not_to be_valid
  end
end
