import TodoActionTypes from './todo.types';

const INITIAL_STATE = {
  todos: [],
  loading: true
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO_START:
      return {
        ...state,
        loading: true
      };
    case TodoActionTypes.ADD_TODO_START:
    case TodoActionTypes.REMOVE_TODO_START:
      return {
        ...state,
        loading: true
      };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    case TodoActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [action.payload, ...state.todos]
      };
    case TodoActionTypes.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case TodoActionTypes.FETCH_TODO_FAILURE:
    case TodoActionTypes.ADD_TODO_FAILURE:
    case TodoActionTypes.REMOVE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
