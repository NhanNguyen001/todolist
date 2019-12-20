import TodoActionTypes from './todo.types';

export const fetchTodosStart = () => ({
  type: TodoActionTypes.FETCH_TODO_START
});

export const addTodoStart = title => ({
  type: TodoActionTypes.ADD_TODO_START,
  payload: title
});

export const removeTodosStart = id => ({
  type: TodoActionTypes.REMOVE_TODO_START,
  payload: id
});

export const fetchTodosSuccess = todos => ({
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: todos
});

export const addTodoSuccess = todos => ({
  type: TodoActionTypes.ADD_TODO_SUCCESS,
  payload: todos
});

export const removeTodosSuccess = id => ({
  type: TodoActionTypes.REMOVE_TODO_SUCCESS,
  payload: id
});

export const fetchTodosFailure = errorMessage => ({
  type: TodoActionTypes.FETCH_TODO_FAILURE,
  payload: errorMessage
});

export const addTodoFailure = errorMessage => ({
  type: TodoActionTypes.ADD_TODO_FAILURE,
  payload: errorMessage
});

export const removeTodosFailure = errorMessage => ({
  type: TodoActionTypes.FETCH_TODO_FAILURE,
  payload: errorMessage
});

// export const fetchTodosStartAsync = () => async dispatch => {
//   try {
//     dispatch(fetchTodosStart());
//     const res = await axios.get(
//       'https://jsonplaceholder.typicode.com/todos?_limit=10'
//     );
//     dispatch(fetchTodosSuccess(res.data));
//   } catch (error) {
//     dispatch(fetchTodosFailure(error));
//   }
// };

// export const addTodoStartAsync = title => async dispatch => {
//   try {
//     dispatch(addTodoItemStart());
//     const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
//       title,
//       userId: 1,
//       completed: false
//     });
//     res.data.id = uuid.v4();
//     dispatch(addTodoItemSuccess(res.data));
//   } catch (error) {
//     dispatch(addTodoItemFailure(error));
//   }
// };

// export const removeTodoStartAsync = id => async dispatch => {
//   try {
//     dispatch(removeTodoItemStart());
//     await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     dispatch(removeTodoItemSuccess(id));
//   } catch (error) {
//     dispatch(removeTodoItemSuccess(error));
//   }
// };
