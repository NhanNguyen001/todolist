import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import uuid from 'uuid';

import TodoActionTypes from './todo.types';

import {
  fetchTodosSuccess,
  addTodoSuccess,
  removeTodosSuccess,
  fetchTodosFailure,
  addTodoFailure,
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

export function* addTodoStart({ payload: { title } }) {
  try {
    const res = yield axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      userId: 1,
      completed: false
    });
    res.data.id = uuid.v4();
    yield put(addTodoSuccess(res.data));
  } catch (error) {
    yield put(addTodoFailure(error));
  }
}

export function* onFetchTodosStart() {
  yield takeLatest(TodoActionTypes.FETCH_TODO_START, fetchTodosStart);
}

export function* onAddTodoStart() {
  yield takeLatest(TodoActionTypes.ADD_TODO_START, addTodoStart);
}

export function* onRemoveTodoStart() {
  yield takeLatest(TodoActionTypes.REMOVE_TODO_START, removeTodoStart);
}

export function* todoSagas() {
  yield all([
    call(onFetchTodosStart),
    call(onAddTodoStart),
    call(onRemoveTodoStart)
  ]);
}
