/*
 *
 * Signup reducer
 *
 */

import {
  SIGNUP_CHANGE,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_SIGNUP_LOADING,
  HIDE_SIGNUP_ERROR
} from './constants';

const initialState = {
  signupFormData: {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
  isLoading: false,
  signupError: null
};

const signupReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SIGNUP_CHANGE:
      newState = {
        ...state,
        signupFormData: { ...state.signupFormData, ...action.payload }
      };
      return newState;
    case SIGNUP_SUCCESS:
      newState = {
        ...state,
        signupError: null,
        signupFormData: {
          email: '',
          firstName: '',
          lastName: '',
          password: ''
        },
        isLoading: false
      };
      return newState;
    case SIGNUP_ERROR:
      newState = {
        ...state,
        signupError: action.err.message,
        isLoading: false
      };
      return newState;
    case SET_SIGNUP_LOADING:
      newState = {
        ...state,
        isLoading: true
      };
      return newState;
    case HIDE_SIGNUP_ERROR:
      newState = {
        ...state,
        signupError: null
      };
      return newState;
    default:
      return state;
  }
};

export default signupReducer;
