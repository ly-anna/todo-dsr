import { TODOS_REQUEST, TODOS_REQUEST_SUCCESS, TODOS_REQUEST_FAILURE } from './types';

import todosFromServer from './services';

export const todosRequest = () => ({
  type: TODOS_REQUEST,
});

export const todosRequestSuccess = (todosList) => ({
  type: TODOS_REQUEST_SUCCESS,
  todosList,
});

export const todosRequestFailure = () => ({
  type: TODOS_REQUEST_FAILURE,
});

export function todosAction() {
  return (dispatch) => {
    dispatch(todosRequest());
    todosFromServer()
      .then((res) => {
        const todosList = res.data;
        dispatch(todosRequestSuccess(todosList));
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
}
