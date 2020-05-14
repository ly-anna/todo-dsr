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
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });

    // .then(() => {
    //   // localStorage.removeItem('user'); // не удаляет из localStorage
    // })
    // .catch((error) => {
    //   console.log(error);
    //   throw error;
    // });
    // .then(console.log('logout then'))
    //   // .then(() => history.push('/login'))
    //   .catch((error) => {
    //     console.log(error);
    //     // throw error;
    //   });
  };
}

export const userActions = {
  loginAction,
  logoutAction,
};
