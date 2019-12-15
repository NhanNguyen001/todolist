import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import TodoActionTypes from './todo.types';

import { fetchTodosSuccess, fetchTodosFailure } from './todo.actions';

export function* fetchTodosAsync() {
  yield console.log('I am fired');
  try {
    const res = yield axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    yield console.log('I am fired successfully');
    yield console.log(res.data);
    yield put(fetchTodosSuccess(res.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

export function* fetchTodosStart() {
  yield takeEvery(TodoActionTypes.FETCH_TODO_START, fetchTodosAsync);
}
