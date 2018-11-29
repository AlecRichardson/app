import {
  USER_REGISTER_ERRORS,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_ERRORS,
  USER_LOGIN_SUCCESS,
  PROFILE_SUCCESS,
  PROFILE_ERRORS
} from "../Actions/Types";

const initialState = {
  registerErrors: {},
  loginErrors: {},
  profileErrors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_ERRORS:
      return { ...state, registerErrors: action.payload };
    case USER_REGISTER_SUCCESS:
      return { ...state, registerErrors: {} };

    case USER_LOGIN_ERRORS:
      return { ...state, loginErrors: action.payload };
    case USER_LOGIN_SUCCESS:
      return { ...state, loginErrors: {} };

    case PROFILE_ERRORS:
      return { ...state, profileErrors: action.payload };
    case PROFILE_SUCCESS:
      return { ...state, profileErrors: {} };

    default:
      return initialState;
  }
}
