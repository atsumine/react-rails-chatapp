class MessengerContainer extends Component {
    constructor(props) {
        super(props);
        this._messagesRef = new Firebase('https://reactnative-app-72cec.firebaseio.com/messages);
        this._messages = [];

        this.state = {
            messages: this._messages,
            typingMessage: ''
        };
    }
}
