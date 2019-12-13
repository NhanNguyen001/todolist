import React, { useState } from 'react';
import { connect } from 'react-redux';

import { TodoItemContainer, CustomButton, CustomDiv } from './todo-item.styles';
import { removeTodoStartAsync } from '../../redux/todo/todo.actions';

const TodoItem = ({ todo: { id, title, completed }, removeTodoStartAsync }) => {
  const [markComplete, setMarkcomple] = useState(completed);

  const handleChange = () => {
    setMarkcomple(!markComplete);
  };

  const handleClick = id => {
    removeTodoStartAsync(id);
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
      <CustomButton onClick={() => handleClick(id)}>x</CustomButton>
    </TodoItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeTodoStartAsync: id => dispatch(removeTodoStartAsync(id))
});

export default connect(null, mapDispatchToProps)(TodoItem);
