import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetchTodosStart } from './todo/todo.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger, thunk];
const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchTodosStart);

const persistor = persistStore(store);

export { store, persistor };
