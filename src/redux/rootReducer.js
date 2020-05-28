import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import usersReducer from './users/reducers';
import todosReducer from './todos/reducers';

const rootReducer = combineReducers({
  authentication,
  usersReducer,
  todosReducer,
});

export default rootReducer;
