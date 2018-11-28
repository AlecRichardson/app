import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERRORS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERRORS,
  PROFILE_SUCCESS,
  PROFILE_ERRORS,
  TUTOR_SUCCESS,
  TUTOR_ERRORS
} from "../Types";
import axios from "axios";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3001/api/users/register", userData)
    .then(res => {
      dispatch({ type: USER_REGISTER_SUCCESS });
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: USER_REGISTER_ERRORS,
        payload: err.response.data
      });
    });
};

// Login User
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:3001/api/users/login", userData)
    .then(res => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.success });
      localStorage.setItem("userToken", res.data.token);
      history.push("/profile");
    })
    .catch(err =>
      dispatch({
        type: USER_LOGIN_ERRORS,
        payload: err.response.data
      })
    );
};

// add Profile
export const addProfile = (userData, history) => dispatch => {
  axios
    .put("http://localhost:3001/api/users/profile", userData)
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

// get subjects
export const getSubjects = (id, history) => dispatch => {
  axios
    .post(`http://localhost:3001/api/tutors/${id}/subjects`)
    .then(res => {
      dispatch({ type: TUTOR_SUCCESS, payload: res.data.subjects });
    })
    .catch(err => {
      dispatch({
        type: TUTOR_ERRORS,
        payload: err.response.data
      });
    });
};
