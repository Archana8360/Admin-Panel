class ClientsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  before_action :set_client, only: %i[ show edit update destroy ]

  include Pagination
  attr_reader 
  POSTS_PER_PAGE = 5

  def index
    @pagination, @clients = paginate(collection: Client.all, params: page_params)
    $collection = Client.all 
  end

  def page
    @pagination, @clients = paginate(collection: $collection, params: page_params)
    respond_to  do |format|
      format.js
    end

  end

  def search
    @parameter = params[:first_name].downcase
    @pagination, @clients = paginate(collection: Client.all.where("lower(first_name) LIKE :search",search: "%#{@parameter}%"), params:page_params)
    $collection = Client.all.where("lower(first_name) LIKE :search",search: "%#{@parameter}%")
    respond_to do |format|
      format.js
    end
  end
  

  # GET /clients/1 or /clients/1.json
  def show
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  # GET /clients/1/edit
  def edit
  end

  # POST /clients or /clients.json
  def create
    @client = Client.new(client_params)

    respond_to do |format|
      if @client.save
        format.html { redirect_to client_url(@client), notice: "User was successfully created." }
        format.json { render :show, status: :created, location: @client }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clients/1 or /clients/1.json
  def update
    respond_to do |format|
      if @client.update(client_params)
        format.html { redirect_to client_url(@client), notice: "User was successfully updated." }
        format.json { render :show, status: :ok, location: @client }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  
  def update_status
    @client = Client.find(params[:id])
    @client.update(status: @client.status==true ? false : true)

    respond_to do |format|
      format.js
    end
  end

  
  def sortusers
    @pagination, @clients = paginate(collection:Client.order(:first_name), params:page_params)
    $collection = Client.order(:first_name)
    respond_to do |format|
      format.js
    end
  end


  def sortstatus
    @clients = Client.all.order(status: params[:sort_direction])
    respond_to do |format|
      format.js
    end
  end

  def sortemails
    @pagination, @clients = paginate(collection:Client.order(:email), params:page_params)
    $collection = Client.order(:email)
    respond_to do |format|
      format.js
    end
  end
  


  


  

  

  # DELETE /clients/1 or /clients/1.json
  def destroy
    @client.destroy

    respond_to do |format|
      format.html { redirect_to clients_url, notice: "User was successfully deleted." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.require(:client).permit(:first_name, :last_name, :email, :phone)
    end

    def page_params
      params.permit(:page).merge(per_page: POSTS_PER_PAGE)
    end
    
end
