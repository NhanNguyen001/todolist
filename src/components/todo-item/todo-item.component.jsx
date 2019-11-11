import React from 'react';

import { TodoItemContainer, CustomButton, CustomDiv } from './todo-item.styles';

const TodoItem = ({ todo: { id, title, completed } }) => {
  return (
    <TodoItemContainer>
      <CustomDiv completed={completed}>
        <input
          type='checkbox'
          // onChange={this.props.markComplete.bind(this, id)}
        />
        {title}
      </CustomDiv>
      {/* <button onClick={this.props.delTodo.bind(this, id)}>x</button>s */}
      <CustomButton>x</CustomButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
