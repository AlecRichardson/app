import React, { Component } from 'react';
import '../styles/App.css';
import ChatRoom from './ChatRoom.js';

class App extends Component {

  render(){
    return (
      <div className="App">
          <ChatRoom/>
      </div>
    );
  }
}

export default App;
