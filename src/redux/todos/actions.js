import {
  TODOS_REQUEST,
  TODOS_REQUEST_SUCCESS,
  TODOS_REQUEST_FAILURE,
  ADD_TODO,
  DELETE_TODO,
} from './types';

import { todosFromServer, addTodoToServer, deleteTodoFromServer } from './services';

export const todosRequest = () => ({
  type: TODOS_REQUEST,
});

export const todosRequestSuccess = (todosList) => ({
  type: TODOS_REQUEST_SUCCESS,
  todosList,
});

export const todosRequestFailure = (error) => ({
  type: TODOS_REQUEST_FAILURE,
  error,
});

export const addTodoRequest = (newTodo) => ({
  type: ADD_TODO,
  newTodo,
});

export const deleteTodoRequest = (id) => ({
  type: DELETE_TODO,
  id,
});

export function todosListAction() {
  return (dispatch) => {
    dispatch(todosRequest());
    todosFromServer()
      .then((res) => {
        const todosList = res.data;
        dispatch(todosRequestSuccess(todosList));
      })
      .catch((error) => {
        dispatch(todosRequestFailure(error.toString()));
        console.log(error);
        // throw error;
      });
  };
}

export function addTodoAction(values, setSubmitting) {
  return (dispatch) => {
    addTodoToServer(values, setSubmitting)
      .then((res) => {
        setSubmitting(false);
        const newTodo = res.data;
        dispatch(addTodoRequest(newTodo));
      })
      .catch((error) => {
        setSubmitting(false);
        console.log(error);
        throw error;
      });
  };
}

export function deleteTodoAction(id) {
  return (dispatch) => {
    deleteTodoFromServer(id)
      .then(() => {
        dispatch(deleteTodoRequest(id));
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };
}
