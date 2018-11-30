import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Nav.css";

import { loginUser } from "../../Actions/User/UserAction";
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home", validate: false, user: null };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.active !== this.props.active) {
      this.setState({ activeItem: this.props.active });
      // let token = localStorage.getItem("userToken");
      // this.setState({ notLoggedIn: false });
      // const decoded = jwt_decode(token);
      // this.setState({ user: decoded.name });
    }
  };

  render() {
    const { activeItem, validate } = this.state;
    return (
      <Container>
        <div className="Navbar">
          <Container>
            <h1 className="nav-title">Tutor Finder</h1>
          </Container>
          <Menu className="menu" borderless pointing secondary>
            <Link to="/">
              <Menu.Item
                as="span"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/tutors">
              <Menu.Item
                as="span"
                name="find tutors"
                active={activeItem === "find tutors"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/profile">
              <Menu.Item
                as="span"
                name="profile"
                active={activeItem === "profile"}
                onClick={this.handleItemClick}
              />
            </Link>

            <Menu.Menu position="right">
              <Link to="/register">
                <Menu.Item
                  as="span"
                  name="register"
                  active={activeItem === "register"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/login">
                <Menu.Item
                  as="span"
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

const mapStateToProps = state => {
  return {
    active: state.userReducer.active
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Nav);
