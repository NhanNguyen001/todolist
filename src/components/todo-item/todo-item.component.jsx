import React, { useState } from 'react';

import { TodoItemContainer, CustomButton, CustomDiv } from './todo-item.styles';

const TodoItem = ({ todo: { id, title, completed }, delTodo }) => {
  const [markComplete, setMarkcomple] = useState(completed);

  const handleChange = () => {
    setMarkcomple(!markComplete);
  };

  return (
    <TodoItemContainer>
      <CustomDiv completed={markComplete}>
        {markComplete ? (
          <input type='checkbox' onChange={handleChange} checked />
        ) : (
          <input type='checkbox' onChange={handleChange} />
        )}
        {title}
      </CustomDiv>
      {/* <CustomButton onClick={() => delTodo(id)}>x</CustomButton> */}
      <CustomButton>x</CustomButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
