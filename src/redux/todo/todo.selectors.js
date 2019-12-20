import { createSelector } from 'reselect';

// Fist type: input selector
const todosSelector = state => state.todos;

// Second type: output selector
export const todoItemsSelector = createSelector(
  [todosSelector],
  todos => todos.todos
);

export const isLoadingTodoItemsSelector = createSelector(
  [todosSelector],
  todos => todos.loading
);
