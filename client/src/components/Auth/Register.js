import "./Login.css";
import {Button, RadioButton} from "semantic-ui-react";
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="form">
		 <h1>Tutor Finder</h1>
		    <form>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>
                <input type="text" id="email" name="email" placeholder="Your email.."></input>
			
			<div className='ui compact menu'>
			  <div role='listbox' aria-expanded='false' className='ui item simple dropdown' tabindex='0'>
				<div className='text' role='alert' aria-live='polite'>
				  Grade Level
				</div>
				<i aria-hidden='true' className='dropdown icon' />
				<div className='menu transition'>
				  <div
					style='pointer-events:all'
					role='option'
					aria-checked='false'
					aria-selected='true'
					className='selected item'
				  >
					<span className='text'>9th Grade</span>
				  </div>
				  <div
					style='pointer-events:all'
					role='option'
					aria-checked='false'
					aria-selected='false'
					className='item'
				  >
					<span className='text'>10th Grade</span>
				  </div>
				  <div
					style='pointer-events:all'
					role='option'
					aria-checked='false'
					aria-selected='false'
					className='item'
				  >
					<span className='text'>11th Grade</span>
				  </div>
					<div
					style='pointer-events:all'
					role='option'
					aria-checked='false'
					aria-selected='false'
					className='item'
				  >
					<span className='text'>12th Grade</span>
				  </div>
					<div
					style='pointer-events:all'
					role='option'
					aria-checked='false'
					aria-selected='false'
					className='item'
				  >
					<span className='text'>College</span>
				  </div>
				</div>
			  </div>
              </div>
			
			<div className="ui form">
			  <div className="inline fields">
				<label>Are you a Tutor or a Student?</label>
				<div className="field">
				    <div className="ui radio checkbox">
					    <input type="radio" name="frequency"></input>
					    <label>Tutor</label>
				    </div>
                </div>
				<div className="field">
				  <div className="ui radio checkbox">
					<input type="radio" name="frequency"></input>
					<label>Student</label>
				  </div>
        </div>
			</div>
			</div>
			
			<input type="text" id="password" name="password" placeholder="Password...."></input>
			<input type="text" id="confPassword" name="confPassword" placeholder="Confirm Password.."></input>
			
            <Button primary>Register</Button>
		</form>
      </div>
    )
  }
}
