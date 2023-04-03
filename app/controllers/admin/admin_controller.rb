class Admin::AdminController < ApplicationController 
  before_action :authenticate_user!
  def dashboard
  end

  def project_management 
  end

  def news_management
  end

  def edit_profile
    @profile = current_user.profile || current_user.build_profile
  end
  
  def update_profile
    @profile = current_user.profile || current_user.build_profile
    @profile.user_id = current_user.id 
    if @profile.update(profile_params)
      redirect_to profile_path
    else
      render :edit_profile
    end
  end
  
  private
  
  def profile_params
    params.require(:profile).permit(:first_name, :last_name, :phone, :country, :image)
  end
end
