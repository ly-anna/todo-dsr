import * as types from './types';
import usersFromServer from './services';

export const usersRequest = () => ({
  type: types.USERS_REQUEST,
});

export const usersRequestSuccess = (usersList) => ({
  type: types.USERS_REQUEST_SUCCESS,
  usersList,
});

export const usersRequestFailure = () => ({
  type: types.USERS_REQUEST_FAILURE,
});

export function usersAction() {
  return (dispatch) => {
    dispatch(usersRequest());
    usersFromServer()
      .then((res) => {
        const usersList = res.data;
        dispatch(usersRequestSuccess(usersList));
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
}
