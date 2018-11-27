import React, { Component } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import "./Auth/Login.css";

// actions
import { addProfile } from "../Actions/User/ProfileAction";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {};

    this.props.addProfile(profileData);
  }

  onSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("userToken");
    const decoded = jwt_decode(token);

    const newProfile = {
      id: decoded.id,
      subjects: this.state.subjects
    };

    console.log("profile", newProfile);

    // this.props.registerUser(newUser, this.props.history);
  }

  handleChange = (e, { value, checked }) => {
    let subjects = this.state.subjects;

    if (checked) {
      this.setState(state => ({
        ...state,
        subjects: [...state.subjects, value]
      }));
    } else {
      var index = subjects.indexOf(value);
      if (index > -1) {
        subjects.splice(index, 1);
        this.setState({
          subjects
        });
      }
    }
  };
  render() {
    console.log("state", this.state);
    return (
      <div>
        <div className="formInput">
          <h2>Profile</h2>
          <h3>Add subjects to your profile</h3>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <Checkbox
                label="Math"
                value="math"
                name="math"
                onChange={this.handleChange}
              />
              <Checkbox
                label="Science"
                value="science"
                name="science"
                onChange={this.handleChange}
              />
              <Checkbox
                label="History"
                value="history"
                name="history"
                onChange={this.handleChange}
              />
              <Checkbox
                label="English"
                value="english"
                name="english"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field
              className="formInput"
              control={Button}
              fluid={true}
              content="Submit"
              color="green"
            />
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginErrors: state.loginErrors,
    loginSucess: state.loginSuccess
  };
};

export default connect(
  mapStateToProps,
  { addProfile }
)(Profile);
