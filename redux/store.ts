
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cocktailsReducer } from './reducer';

const middlewares = [thunk];

export const store = createStore(cocktailsReducer, applyMiddleware(...middlewares));