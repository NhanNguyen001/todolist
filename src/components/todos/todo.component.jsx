import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../todo-item/todo-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import { fetchTodosStart } from '../../redux/todo/todo.actions';

const Todos = ({ fetchTodosStart, todos: { todos, loading } }) => {
  useEffect(() => {
    fetchTodosStart();
  }, [fetchTodosStart]);

  let todoItem = !loading ? (
    todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  ) : (
    <WithSpinner />
  );

  return todoItem;
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodosStart: () => dispatch(fetchTodosStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
