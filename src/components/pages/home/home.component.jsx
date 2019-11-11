import React from 'react';

import Todos from '../../todos/todo.component';
import AddTodo from '../../add-todo/add-todo.component';

const HomePage = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default HomePage;
