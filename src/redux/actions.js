import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function request() {
  return { type: userConstants.LOGIN_REQUEST };
}
function success(user) {
  return { type: userConstants.LOGIN_SUCCESS, user };
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
  const { login } = values;
  return (dispatch) => {
    dispatch(request());
    userService
      .loginToServer(values, setSubmitting)
      .then((res) => {
        setSubmitting(false);
        localStorage.setItem('user', JSON.stringify(res.data.name));
        dispatch(success(login));
        // history.push('/');
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
        localStorage.removeItem('user');
        // history.push('/login')
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
