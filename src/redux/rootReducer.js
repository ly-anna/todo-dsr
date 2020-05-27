import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import usersReducer from './users/reducers';

const rootReducer = combineReducers({
  authentication,
  usersReducer,
});

export default rootReducer;
