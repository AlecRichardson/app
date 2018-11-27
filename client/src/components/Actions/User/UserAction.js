import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERRORS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERRORS
} from "../Types";
import axios from "axios";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/user/register", userData)
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
