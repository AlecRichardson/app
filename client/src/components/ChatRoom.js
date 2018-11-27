import React, { Component } from 'react';
import '../styles/ChatRoom.css';
import SocketIOClient from 'socket.io-client';
import { Input } from 'semantic-ui-react';

class ChatRoom extends Component {
  constructor(props){
    super(props);

    this.state = {
      targetUser: 'user2',
      input: ""
    };

    this.socket = SocketIOClient('http://localhost:3001/');
  }

  componentDidMount(){
    this.socket.emit('join', {userId: this.props.userId});

    this.socket.on('new message', (data) => {
      alert(data.msg);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.socket.emit('chat message', {to: this.state.targetUser, from: this.props.userId, msg: this.state.input});
    this.setState({
      input: ""
    });
    document.getElementById('messageForm').reset();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render(){
    return (
      <div className="ChatRoom">
        <form id="messageForm" onSubmit={this.handleSubmit}>
            <Input type="text" id="input" fluid onChange={this.handleChange} autoComplete="off" placeholder="Say something..." icon='send' autoFocus/>
        </form>
    		<ul id="messages"></ul>
      </div>
    );
  }
}

export default ChatRoom;
