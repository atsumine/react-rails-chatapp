var MessageBox = React.createClass({
  handleMessageSubmit: function (message) {
    console.log('handleMessageSubmit called!');

    $.post('/chats', {chat: message}, function(data) {
      console.log(data);
    });

    message.id = new Date();
    var newMessages = this.state.messages.concat(message);
    this.setState({ messages: newMessages });
  },
  getInitialState: function() {
    return {
      messages: []
    }
  },
  componentWillMount: function() {
    datas = [];
    $.get('/chats.json', function(data) {
      Array.prototype.push.apply(datas, data);

      console.log(this);
      var newMessage = this.state.messages.concat(data);
      this.setState({messages: newMessage});
    }.bind(this));
  },
  render: function() {
    var messageItems = this.state.messages.map(function(message){
      return (
        <MessageItem key={message.id} message={message} />
      );
    });

    return (
      <div className="messageBox">
        {messageItems}
        <MessageForm onMessageSubmit={this.handleMessageSubmit} />
      </div>
    );
  }
});
