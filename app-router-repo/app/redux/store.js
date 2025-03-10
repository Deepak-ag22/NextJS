import { createStore, applyMiddleware } from 'redux';
import quotesReducer from "./reducers";
import{ thunk }from 'redux-thunk';
const store = createStore(quotesReducer, applyMiddleware(thunk));

export default store;

