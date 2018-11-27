import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import "./Login.css";

// actions
import { loginUser } from "../../Actions/User/UserAction";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="formInput">
          <h2>Login</h2>
          <Form onSubmit={this.onSubmit}>
            <Form.Input
              className="formInput"
              placeholder="Email..."
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {/* {this.props.loginErrors.email ? (
              <Label
                color="red"
                pointing="below"
                content={this.props.loginErrors.email}
              />
            ) : null} */}
            <Form.Input
              className="formInput"
              placeholder="Password..."
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {/* {this.props.loginErrors.password ? (
              <Label
                color="red"
                pointing="below"
                content={this.props.loginErrors.password}
              />
            ) : null} */}
            <Form.Field
              className="formInput"
              control={Button}
              fluid={true}
              content="Login"
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
  { loginUser }
)(Login);
