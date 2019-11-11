import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../todo-item/todo-item.component';

import { fetchTodosStartAsync } from '../../redux/todo/todo.actions';

const Todos = ({ fetchTodos, todos: { todos } }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      // markComplete={this.props.markComplete}
      // delTodo={this.props.delTodo}
    />
  ));
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodosStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
