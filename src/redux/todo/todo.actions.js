import TodoActionTypes from './todo.types';
import axios from 'axios';

export const fetchTodosStart = () => ({
  type: TodoActionTypes.FETCH_TODO_START
});

export const fetchTodosSuccess = todos => ({
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: todos
});

export const fetchTodosFailure = errorMessage => ({
  type: TodoActionTypes.FETCH_TODO_FAILURE,
  payload: errorMessage
});

export const fetchTodosStartAsync = () => async dispatch => {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
    dispatch(fetchTodosSuccess(res.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};
