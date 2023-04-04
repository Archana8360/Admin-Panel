class Profile < ApplicationRecord
    belongs_to :user
    has_one_attached :image
  
    # validates :image, presence: true, blob: { content_type: ['image/png', 'image/jpg', 'image/jpeg'], message: "must be a valid image file type (JPG or PNG)" }
    validates :country, presence: true
    # validates :phone, presence: true, format: { with: /\A\d{10}\z/, message: "must be a valid phone number" }
    validates :last_name, presence: true, format: { without: /\d/, message: "cannot contain numbers" }
    validates :first_name, presence: true, format: { without: /\d/, message: "cannot contain numbers" }
    validates :image, attached: true,
    # processable_image: true,
    content_type: ['image/png', 'image/jpeg']
  end
  