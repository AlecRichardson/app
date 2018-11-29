import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";

// actions
import { getSubjects, getTutors } from "../Actions/User/TutorAction";

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
    this.props.getSubjects(user);
    this.props.getTutors(this.props.subjects);
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>Find a tutor</h1>
        {this.props.tutors.map((tutor, index) => {
          return (
            <div>
              <h1>{tutor.name}</h1>
              <h3>{tutor.userType}</h3>
              <div>
                {/* {tutor.name.subjects.forEach(subject => {
                  <span>{subject}</span>;
                })} */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("prop state: ", state);
  return {
    tutorErrors: state.tutorErrors,
    subjects: state.tutorReducer.subjects,
    tutors: state.tutorReducer.tutors
  };
};

export default connect(
  mapStateToProps,
  { getSubjects, getTutors }
)(Tutor);
