import { USERS_REQUEST, USERS_REQUEST_SUCCESS, USERS_REQUEST_FAILURE } from './types';

const user = JSON.parse(localStorage.getItem('user'));
// const role = JSON.parse(localStorage.getItem('role'));
const initialState = user ? { usersList: [] } : {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { usersRequesting: true };
    case USERS_REQUEST_SUCCESS:
      return { usersRequesting: false, usersRequestsuccess: true, usersList: action.usersList };
    case USERS_REQUEST_FAILURE:
      return { usersRequesting: false, usersRequestsuccess: false };
    default:
      return state;
  }
};

export default usersReducer;
