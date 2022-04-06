import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import tablesReducer from './tablesRedux';
import initialState from './initialState';

// reducer

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers)

// createStore

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
