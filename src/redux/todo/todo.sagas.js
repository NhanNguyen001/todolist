import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import TodoActionTypes from './todo.types';

import {
  fetchTodosSuccess,
  fetchTodosFailure,
  removeTodosSuccess,
  removeTodosFailure
} from './todo.actions';

export function* fetchTodosStart() {
  try {
    const res = yield axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    yield put(fetchTodosSuccess(res.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

export function* removeTodoStart({ payload: { id } }) {
  try {
    // yield axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    yield put(removeTodosSuccess(id));
  } catch (error) {
    yield put(removeTodosFailure(error));
  }
}

export function* onFetchTodosStart() {
  yield takeLatest(TodoActionTypes.FETCH_TODO_START, fetchTodosStart);
}

export function* onRemoveTodoStart() {
  yield takeLatest(TodoActionTypes.REMOVE_TODO_START, removeTodoStart);
}

export function* todoSagas() {
  yield all([call(onRemoveTodoStart), call(onFetchTodosStart)]);
}
