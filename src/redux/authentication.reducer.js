import { userConstants } from './constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

function authentication(state = initialState, action) {
  console.log('clg before initial state', initialState);
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        // loggingIn: true,
        loggedIn: false,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT_REQUEST:
      return { loggingOut: true };
    case userConstants.LOGOUT_SUCCESS:
      return { loggedIn: false };

    default:
      return state;
  }
}

export default authentication;
