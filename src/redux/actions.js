import { createBrowserHistory } from 'history';
import { userConstants } from './constants';
import { userService } from './services';

const history = createBrowserHistory();

function loginAction(values, setSubmitting) {
  const { login, password } = values;
  console.log('loginAction before - values', values);
  console.log('loginAction before - username', login);

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
    dispatch(request(login));
    console.log('dispatch(request - username', login);
    console.log('dispatch(request - values', values);
    userService.loginToServer(values, setSubmitting).then(
      (res) => {
        console.log('>>>>>>res', res);
        dispatch(success(login));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error.toString()));
      },
    );
  };
}

function logoutAction() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

export const userActions = {
  loginAction,
  logoutAction,
};
