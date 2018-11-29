import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";

import Nav from "../components/Layout/Nav";
import Landing from "../components/Layout/Landing";
import Footer from "../components/Layout/Footer";

<<<<<<< HEAD
import "../styles/App.css";
=======
import '../styles/App.css';
>>>>>>> 8f46474a9297504ed031d4ef49a5341b7b810306
import "semantic-ui-css/semantic.min.css";

import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Profile from "../components/Profile";
import Tutor from "../components/Tutor";

class App extends Component {
  state = { users: [] };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/tutors" component={Tutor} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
