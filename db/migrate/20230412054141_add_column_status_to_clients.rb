class AddColumnStatusToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :status, :boolean, default: true
  end
end
