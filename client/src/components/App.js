import React, { Component } from 'react';
import '../styles/App.css';
import "semantic-ui-css/semantic.min.css";

import Register from './Auth/Register';
import Login from './Auth/Login';

class App extends Component {
  state = {users: []};

  render(){
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
