import React, { Component } from 'react';
import '../styles/ChatRoom.css';
import SocketIOClient from 'socket.io-client';
import { Input } from 'semantic-ui-react';

class ChatRoom extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
      userId: null,
      input: ""
    };

    this.socket = SocketIOClient('http://localhost:3001/api');
  }

  handleSubmit = e => {
    e.preventDefault();
    this.socket.emit('chat message', this.state.input);
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
