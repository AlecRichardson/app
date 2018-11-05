import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  state = {users: []};

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Users</h2>
        </header>
      </div>
    );
  }
}

export default App;
