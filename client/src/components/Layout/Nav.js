import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <div className="Navbar">
          <Container>
            <h1 className="nav-title">Tutor Finder</h1>
          </Container>
          <Menu className="menu" borderless pointing secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="find tutors"
              active={activeItem === "find tutors"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="profile"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Menu.Item
                name="register"
                active={activeItem === "register"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </div>
      </Container>
    );
  }
}
