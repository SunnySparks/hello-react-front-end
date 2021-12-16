import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetings';


const store = createStore(
  greetingsReducer,
  applyMiddleware(thunk, logger),
);

export default store;
