import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/tutors">
              <Menu.Item
                name="find tutors"
                active={activeItem === "find tutors"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/profile">
              <Menu.Item
                name="profile"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
            </Link>

            <Menu.Menu position="right">
              <Link to="/register">
                <Menu.Item
                  name="register"
                  active={activeItem === "register"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/login">
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>
          </Menu>
        </div>
      </Container>
    );
  }
}
