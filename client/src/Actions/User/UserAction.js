import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERRORS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERRORS,
  SET_CURRENT_USER
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
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:3001/api/users/login", userData)
    .then(res => {
      dispatch({ type: USER_LOGIN_SUCCESS });
      localStorage.setItem("userToken", res.data.token);
    })
    .catch(err =>
      dispatch({
        type: USER_LOGIN_ERRORS,
        payload: err.response.data
      })
    );
};
