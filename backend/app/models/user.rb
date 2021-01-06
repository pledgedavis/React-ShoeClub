class User < ApplicationRecord
    has_secure_password
    has_many :shoes, :dependent => :delete_all
    # deletes every shoe assigned to the user upon removing the user
    has_many :brands, through: :shoes 
    has_one :cart 
    # validates :username, :email, presence: true 
    # validates :username, :email, uniqueness: true 

end
