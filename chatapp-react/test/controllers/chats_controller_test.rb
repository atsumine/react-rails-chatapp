require 'test_helper'

class ChatsControllerTest < ActionDispatch::IntegrationTest
  test "should get name:string" do
    get chats_name:string_url
    assert_response :success
  end

  test "should get text:string" do
    get chats_text:string_url
    assert_response :success
  end

end
