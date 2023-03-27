class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :email, format: { with: /\A[^@\s]+@[^@\s]+\z/ }, presence: true
  validates :password, presence:true
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

         has_one :profile
         
end
