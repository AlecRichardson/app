import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

// import "../../styles/Login.css";

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
    const errors = this.props.loginErrors;
    return (
      <div>
        <div className="formInput">
          <h2>Login</h2>
          <Form onSubmit={this.onSubmit}>
            {errors.email ? <div className="error">{errors.email}</div> : null}
            <Form.Input
              className="formInput"
              placeholder="Email..."
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={Boolean(errors.email)}
            />
            {errors.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
            <Form.Input
              className="formInput"
              placeholder="Password..."
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={Boolean(errors.password)}
            />

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
    loginErrors: state.userReducer.loginErrors
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
