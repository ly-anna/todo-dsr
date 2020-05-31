import { userConstants } from './types';

console.log("localStorage.getItem('user')", localStorage.getItem('name'));
// console.log("JSON.parse(localStorage.getItem('name'))", JSON.parse(localStorage.getItem('name')));

// const user = JSON.parse(localStorage.getItem('name'));
const user = localStorage.getItem('name');
const role = localStorage.getItem('role');
// const role = JSON.parse(localStorage.getItem('role'));
const initialState = user ? { loggingIn: false, loggedIn: true, user, role } : { loggedIn: false };

function authentication(state = initialState, action) {
  console.log('initialState', initialState);
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
        role: action.role,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
      };
    case userConstants.LOGOUT_REQUEST:
      return { loggingOut: true };
    case userConstants.LOGOUT_SUCCESS:
      return { loggedIn: false };
    case userConstants.ABOUTME_SUCCESS:
      return {
        user: action.user,
        role: action.role,
        loggedIn: true,
      };
    default:
      return state;
  }
}

export default authentication;
