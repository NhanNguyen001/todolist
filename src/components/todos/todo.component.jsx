import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TodoItem from '../todo-item/todo-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import { fetchTodosStart } from '../../redux/todo/todo.actions';
import {
  todoItemsSelector,
  isLoadingTodoItemsSelector
} from '../../redux/todo/todo.selectors';

const Todos = ({ fetchTodosStart, todos, loading }) => {
  // const Todos = props => {
  useEffect(() => {
    fetchTodosStart();
  }, [fetchTodosStart]);

  let todoItem = !loading ? (
    todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  ) : (
    <WithSpinner />
  );

  return todoItem;

  // return <h1>Hello</h1>;
};

const mapStateToProps = createStructuredSelector({
  todos: todoItemsSelector,
  isLoading: isLoadingTodoItemsSelector
});

const mapDispatchToProps = dispatch => ({
  fetchTodosStart: () => dispatch(fetchTodosStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
