import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootSaga from './root.saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger, thunk];
const middlewares = [logger, sagaMiddleware];

// Specify the reducer that tell how state is updated actions
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
