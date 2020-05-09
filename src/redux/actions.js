import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function login(username, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

export const userActions = {
  login,
  logout,
};
