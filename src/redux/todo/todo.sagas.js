import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import TodoActionTypes from './todo.types';

import { fetchTodosSuccess, fetchTodosFailure } from './todo.actions';

export function* fetchTodosAsync() {
  try {
    const res = yield axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    yield put(fetchTodosSuccess(res.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

export function* fetchTodosStart() {
  yield takeLatest(TodoActionTypes.FETCH_TODO_START, fetchTodosAsync);
}
