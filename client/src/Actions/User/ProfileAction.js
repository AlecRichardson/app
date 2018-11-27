import { PROFILE_SUCCESS, PROFILE_ERRORS } from "../Types";
import axios from "axios";

// add Profile
export const addProfile = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3001/api/profile", userData)
    .then(res => {
      dispatch({ type: PROFILE_SUCCESS });
      history.push("/tutors");
    })
    .catch(err => {
      dispatch({
        type: PROFILE_ERRORS,
        payload: err.response.data
      });
    });
};

// Login User
