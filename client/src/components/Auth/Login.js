import React, { Component,} from 'react';
import "./Login.css";
import {Button, Form, Radio} from "semantic-ui-react";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
			email: "",
			grade: "",
			userType: "",
      password: "",
      password2: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
	}
	
	onSubmit(e) {
		e.preventDefault();
	}

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
	}
	
	handleChange = (e, { value }) => this.setState({ value })


  render() {
    return (
      <div>
       <div className="formInput">
						<h1>Tutor Finder</h1>
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
								
								<Form.Input
								  className="formInput"
									placeholder="Password..."
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
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
    )
  }
}
