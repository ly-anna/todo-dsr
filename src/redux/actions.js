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
function logoutSuccess() {
  return { type: userConstants.LOGOUT_SUCCESS };
}
function logoutRequest() {
  return { type: userConstants.LOGOUT_REQUEST };
}

function loginAction(values, setSubmitting) {
  const { login } = values;
  return (dispatch) => {
    dispatch(request(login));
    userService
      .loginToServer(values, setSubmitting)
      .then((res) => {
        setSubmitting(false);
        localStorage.setItem('user', JSON.stringify(res.data.name));
        dispatch(success(login));
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error.toString()));
        throw error;
      });
  };
}

function logoutAction() {
  console.log('logout Action');
  return (dispatch) => {
    dispatch(logoutRequest());
    console.log(';dispatch(logout());');
    userService
      .logoutFromServer()
      .then(() => {
        console.log('removeItem   Ipf,tqfadsddddddddddf');
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
