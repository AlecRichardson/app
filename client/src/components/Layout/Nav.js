import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

import { getSubjects, getTutors } from "../../Actions/User/TutorAction";
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home" };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    console.log("props from nav: ", this.props);
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
  console.log("mapstate props: ", state);
  return {
    tutorErrors: state.tutorErrors,
    subjects: state.tutorReducer.subjects,
    tutors: state.tutorReducer.tutors
  };
};

export default connect(
  mapStateToProps,
  { getSubjects, getTutors }
)(Nav);
