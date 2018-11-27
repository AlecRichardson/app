import React, { Component } from "react";
import "./Login.css";
import { Button, Form, Radio } from "semantic-ui-react";
import { connect } from "react-redux";

// actions
import { registerUser } from "../Actions/User/UserAction";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      grade: "",
      userType: "",
      password: "",
      password2: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      grade: this.state.grade,
      userType: this.state.userType,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div className="formInput">
        <h1>Tutor Finder</h1>
        <h2>Create Account</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            className="formInput"
            placeholder="Your Name..."
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <Form.Input
            className="formInput"
            placeholder="Email..."
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <div>
            <div className="formInput">
              <Form.Field control="select">
                <option value="9th Grade">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
                <option value="College">College</option>
              </Form.Field>
            </div>
          </div>
          <div className="formInput">
            <Form.Group inline>
              <label>Type of User</label>
              <Form.Field
                control={Radio}
                label="Student"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Tutor"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <Form.Input
            className="formInput"
            placeholder="Password..."
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <Form.Input
            className="formInput"
            placeholder="Confirm password..."
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
          />
          <div>
            <Form.Field
              className="formInput"
              control={Button}
              fluid={true}
              content="Register"
              color="green"
            />
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerErrors: state.registerErrors
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
