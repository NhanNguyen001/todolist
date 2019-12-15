import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../todo-item/todo-item.component';
import WithSpinner from '../with-spinner/with-spinner.component';

// import { fetchTodosStartAsync } from '../../redux/todo/todo.actions';
import { fetchTodosStart } from '../../redux/todo/todo.actions';

const Todos = ({ fetchTodos, todos: { todos, loading } }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  let todoItem = !loading ? (
    todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        // delTodo={this.props.delTodo}
      />
    ))
  ) : (
    <WithSpinner />
  );

  return todoItem;
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  // fetchTodos: () => dispatch(fetchTodosStartAsync())
  fetchTodos: () => dispatch(fetchTodosStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
