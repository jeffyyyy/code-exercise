import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import CarReducer from '../features/Car/reducers';

const configureStore = (client) => {
  const loggerMiddlware = createLogger({
    collapsed: () => true
  });

  const middleware = [
    client.middleware(),
    promiseMiddleware(),
    thunk,
    immutableStateInvariant(),
    loggerMiddlware,
  ];

  const store = createStore(
    combineReducers({
      car: CarReducer,
      apollo: client.reducer(),
    }),
    compose(
      applyMiddleware(...middleware),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
  );

  return store;
};

export default configureStore;
