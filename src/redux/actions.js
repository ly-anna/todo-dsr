import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function request() {
  return { type: userConstants.LOGIN_REQUEST };
}
function success(user, role) {
  return { type: userConstants.LOGIN_SUCCESS, user, role };
}
function failure(error) {
  return { type: userConstants.LOGIN_FAILURE, error };
}
function logoutSuccess() {
  return { type: userConstants.LOGOUT_SUCCESS };
}
function logoutRequest() {
  return { type: userConstants.LOGOUT_REQUEST };
}

function loginAction(values, setSubmitting) {
  // const { login } = values;
  return (dispatch) => {
    dispatch(request());
    userService
      .loginToServer(values, setSubmitting)
      .then((res) => {
        setSubmitting(false);
        const { name } = res.data;
        const { role } = res.data;
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        dispatch(success(name, role));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error.toString()));
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

export const userActions = {
  loginAction,
  logoutAction,
};
