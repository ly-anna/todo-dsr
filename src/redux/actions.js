import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function loginRequest() {
  return { type: userConstants.LOGIN_REQUEST };
}
function loginSuccess(user, role) {
  return { type: userConstants.LOGIN_SUCCESS, user, role };
}
function loginFailure(error) {
  return { type: userConstants.LOGIN_FAILURE, error };
}
function logoutRequest() {
  return { type: userConstants.LOGOUT_REQUEST };
}
function logoutSuccess() {
  return { type: userConstants.LOGOUT_SUCCESS };
}

function aboutMeSuccess(user, role) {
  return { type: userConstants.ABOUTME_SUCCESS, user, role };
}

function loginAction(values, setSubmitting) {
  return (dispatch) => {
    dispatch(loginRequest());
    userService
      .loginToServer(values, setSubmitting)
      .then((res) => {
        setSubmitting(false);
        const { name } = res.data;
        const { role } = res.data;
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        dispatch(loginSuccess(name, role));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure(error.toString()));
        throw error;
      });
  };
}

function logoutAction() {
  return (dispatch) => {
    dispatch(logoutRequest());
    userService
      .logoutFromServer()
      .then(() => {
        dispatch(logoutSuccess());
        localStorage.removeItem('name');
        localStorage.removeItem('role');
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
}

function aboutMeAction() {
  return (dispatch) => {
    userService
      .aboutMeFromServer()
      .then((res) => {
        const { name } = res.data;
        const { role } = res.data;
        dispatch(aboutMeSuccess(name, role));
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
}

export const userActions = {
  loginAction,
  logoutAction,
  aboutMeAction,
};
