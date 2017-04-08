class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|
      t.string :user
      t.string :text

      t.timestamps
    end
  end
end
