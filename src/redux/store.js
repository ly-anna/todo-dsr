import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
);
