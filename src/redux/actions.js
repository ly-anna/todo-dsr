import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function request(user) {
  return { type: userConstants.LOGIN_REQUEST, user };
}
function success(user) {
  return { type: userConstants.LOGIN_SUCCESS, user };
}
function failure(error) {
  return { type: userConstants.LOGIN_FAILURE, error };
}
function logout() {
  return { type: userConstants.LOGOUT, user: {} };
}

function loginAction(values, setSubmitting) {
  const { login } = values;

  return (dispatch) => {
    dispatch(request(login));
    userService.loginToServer(values, setSubmitting).then(
      () => {
        dispatch(success(login));
        history.push('/');
      },
      (error) => {
        // переписать на Catch и почитать в чем разница
        dispatch(failure(error.toString()));
      },
    );
  };
}

function logoutAction() {
  return (dispatch) => {
    dispatch(logout());
    userService.logoutFromServer();
  };
}

export const userActions = {
  loginAction,
  logoutAction,
};
