import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import "../../styles/Register.css";

// actions
import { registerUser } from "../../Actions/User/UserAction";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      gradeLevel: "",
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
      name: this.state.fullname,
      email: this.state.email,
      gradeLevel: this.state.gradeLevel,
      userType: this.state.userType,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = (e, { value, name }) => this.setState({ [name]: value });

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.registerSuccess) {
    }
  };

  render() {
    const errors = this.props.registerErrors;
    return (
      <div className="formInput">
        <h2>Create Account</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            className="formInput"
            placeholder="Your Name..."
            name="fullname"
            value={this.state.fullname}
            onChange={this.onChange}
            error={errors.name}
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
          <Form.Input
            className="formInput"
            placeholder="Email..."
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
          />
          {errors.gradeLevel ? (
            <div className="error">{errors.gradeLevel}</div>
          ) : null}
          <div>
            <div className="formInput">
              <Form.Field
                control="select"
                name="gradeLevel"
                onChange={this.onChange}
                error={errors.gradeLevel}
              >
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
                <option value="11">11th Grade</option>
                <option value="12">12th Grade</option>
                <option value="College">College</option>
              </Form.Field>
              {errors.gradeLevel ? (
                <div className="error">{errors.gradeLevel}</div>
              ) : null}
            </div>
          </div>
          <div className="formInput">
            <Form.Group inline>
              <label>Type of User</label>
              <Form.Radio
                label="Student"
                value="student"
                name="userType"
                checked={"student" === this.state.userType}
                onChange={() => {
                  this.handleChange(null, {
                    value: "student",
                    name: "userType"
                  });
                }}
                error={errors.userType}
              />
              <Form.Radio
                label="Tutor"
                value="tutor"
                name="userType"
                checked={"tutor" === this.state.userType}
                onChange={() => {
                  this.handleChange(null, { value: "tutor", name: "userType" });
                }}
                error={errors.userType}
              />
            </Form.Group>
            {errors.userType ? (
              <div className="error">{errors.userType}</div>
            ) : null}
          </div>
          <Form.Input
            className="formInput"
            placeholder="Password..."
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
          />
          {errors.password ? (
            <div className="error">{errors.password}</div>
          ) : null}
          <Form.Input
            className="formInput"
            placeholder="Confirm password..."
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
          />
          {errors.password2 ? (
            <div className="error">{errors.password2}</div>
          ) : null}
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
  console.log("mapstatetoprops", state);
  return {
    registerErrors: state.userReducer.registerErrors
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
