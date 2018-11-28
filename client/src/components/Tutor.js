import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";

// actions
import { getSubjects } from "../Actions/User/UserAction";

class Tutor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: []
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("userToken");
    const decoded = jwt_decode(token);
    let user = decoded.id;
    this.props.getSubjects(user, this.props.history);
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>Find a tutor</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state.userReducer.subjects);
  return {
    tutorErrors: state.tutorErrors,
    subjects: state.userReducer.subjects
  };
};

export default connect(
  mapStateToProps,
  { getSubjects }
)(Tutor);
