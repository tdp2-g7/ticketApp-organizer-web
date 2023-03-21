import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line max-len
export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
