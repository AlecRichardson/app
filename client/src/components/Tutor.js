import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.subjects !== this.props.subjects) {
      console.log("CUP");
      this.props.getTutors(this.props.subjects);
    }
  };

  render() {
    console.log("render props", this.props);
    return (
      <div>
        <h1>Find a tutor</h1>
        {this.props.tutorErrors ? (
          <div>There are currently no tutors matching your subjects.</div>
        ) : null}
        {this.props.tutors
          ? this.props.tutors.map((tutor, index) => {
              console.dir(tutor._id);
              let chatLink = '/chat/' + tutor._id;
              return (
                <div key={index}>
                  <h1>{tutor.name}</h1>
                  <h3>{tutor.userType}</h3>
                  <div>
                    <h3>Subjects</h3>
                    {tutor.subjects.map((subject, index) => {
                      return (
                        <div key={index}>
                          <span>{subject}</span>
                        </div>
                      );
                    })}
                  </div>
                  <Link to={chatLink} >
                    <Button content="Select" color="blue" />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
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
)(Tutor);
