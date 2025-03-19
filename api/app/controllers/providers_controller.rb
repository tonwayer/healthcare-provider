class ProvidersController < ApplicationController
  before_action :authenticate_user!  # Ensure authentication for all actions
  before_action :set_provider, only: [:show, :update, :destroy, :reactivate]

  # GET /providers
  def index
    providers = Provider.all
    render json: providers
  end

  # GET /providers/:id
  def show
    render json: @provider
  end

  # POST /providers
  def create
    provider = Provider.new(provider_params)
    if provider.save
      render json: provider, status: :created
    else
      render json: { errors: provider.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT/PATCH /providers/:id
  def update
    if @provider.update(provider_params)
      render json: @provider
    else
      render json: { errors: @provider.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /providers/:id (Soft delete)
  def destroy
    @provider.deactivate
    render json: { message: "Provider deactivated" }
  end

  # PUT /providers/:id/reactivate (Reactivate provider)
  def reactivate
    @provider.reactivate
    render json: { message: "Provider reactivated" }
  end

  private

  def set_provider
    @provider = Provider.find_by(id: params[:id])
    render json: { error: "Provider not found" }, status: :not_found unless @provider
  end

  def provider_params
    params.require(:provider).permit(:name, :specialty, :npi, :location, :credentials)
  end
end
