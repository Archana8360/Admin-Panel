class SessionsController < Devise::SessionsController
    def create
      user = User.find_by(email: params[:user][:email])
    
      if user.nil?
        flash[:error] = 'Invalid email'
        redirect_to new_user_session_path
      elsif !user.valid_password?(params[:user][:password])
        flash[:error] = 'Invalid password'
        redirect_to new_user_session_path
      else
        super
      end
    end
end
  