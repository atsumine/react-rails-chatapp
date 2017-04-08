class ChatsController < ApplicationController
  def index
    @chats = Chat.all
    respond_to do |format|
      format.html
      format.json { render json: @chats.to_json }
    end
  end
  def create
    @chat = Chat.new(chats_params)
    respond_to do |format|
      if @chat.save
        format.html
        format.json { render status: :created }
      else
        format.html
        format.json { render json: @chat.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def chats_params
      params.require(:chat).permit(:user, :text)
    end
end
