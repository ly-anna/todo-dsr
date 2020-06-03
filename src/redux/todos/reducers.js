import { TODOS_REQUEST, TODOS_REQUEST_SUCCESS, TODOS_REQUEST_FAILURE, ADD_TODO } from './types';

const user = JSON.parse(localStorage.getItem('user'));
// const role = JSON.parse(localStorage.getItem('role'));
const initialState = user ? { todosList: [] } : {};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return { todosRequesting: true };
    case TODOS_REQUEST_SUCCESS:
      return {
        todosRequesting: false,
        todosRequestsuccess: true,
        todosList: action.todosList,
      };
    case TODOS_REQUEST_FAILURE:
      return { todosRequesting: false, todosRequestsuccess: false, error: action.error };
    case ADD_TODO:
      return {
        todosList: state.todosList.concat(action.newTodo),
        error: action.error,
      };
    default:
      return state;
  }
};

export default todosReducer;
