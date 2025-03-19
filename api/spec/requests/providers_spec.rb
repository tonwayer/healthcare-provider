require 'rails_helper'

RSpec.describe "Providers API", type: :request do
  let!(:provider) { Provider.create!(name: "Dr. Smith", specialty: "Dermatology", npi: "5555555555", location: "Test City", credentials: "MD") }

  describe "GET /providers without authentication" do
    it "returns unauthorized status" do
      get "/providers"

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)).to eq({ "error" => "Unauthorized" })
    end
  end

  describe "GET /providers/:id without authentication" do
    it "returns unauthorized status" do
      get "/providers/#{provider.id}"

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)).to eq({ "error" => "Unauthorized" })
    end
  end

  describe "POST /providers without authentication" do
    it "returns unauthorized status" do
      post "/providers", params: {
        provider: {
          name: "Dr. Alice",
          specialty: "Cardiology",
          npi: "1234567890",
          location: "New York",
          credentials: "MD"
        }
      }

      expect(response).to have_http_status(:unauthorized)
      expect(JSON.parse(response.body)).to eq({ "error" => "Unauthorized" })
    end
  end

  context "with authentication" do
    let!(:user) { User.create!(email: "test@example.com", password: "password123", api_token: "securetoken123") }
    let!(:auth_headers) { { "Authorization" => "Token token=#{user.api_token}" } }

    describe "GET /providers" do
      it "returns a list of providers" do
        get "/providers", headers: auth_headers

        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body).length).to be > 0
      end
    end

    describe "GET /providers/:id" do
      it "returns provider details" do
        get "/providers/#{provider.id}", headers: auth_headers

        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["name"]).to eq("Dr. Smith")
      end
    end

    describe "POST /providers" do
      it "creates a new provider" do
        expect {
          post "/providers", params: { provider: { name: "Dr. New", specialty: "Neurology", npi: "1234567890", location: "Los Angeles", credentials: "MD" } }, headers: auth_headers
        }.to change(Provider, :count).by(1)

        expect(response).to have_http_status(:created)
      end
    end

    describe "PUT /providers/:id" do
      it "updates a provider" do
        put "/providers/#{provider.id}", params: { provider: { location: "San Francisco" } }, headers: auth_headers

        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["location"]).to eq("San Francisco")
      end
    end

    describe "DELETE /providers/:id" do
      it "deletes a provider" do
        expect {
          delete "/providers/#{provider.id}", headers: auth_headers
        }.to change(Provider, :count).by(-1)

        expect(response).to have_http_status(:no_content)
      end
    end
  end
end
