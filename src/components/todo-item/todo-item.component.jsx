import React, { useState } from 'react';
import { connect } from 'react-redux';

import { TodoItemContainer, CustomButton, CustomDiv } from './todo-item.styles';
import { removeTodosStart } from '../../redux/todo/todo.actions';

const TodoItem = ({ todo: { id, title, completed }, removeTodosStart }) => {
  const [markComplete, setMarkcomple] = useState(completed);

  const handleChange = () => {
    setMarkcomple(!markComplete);
  };

  const handleClick = id => {
    removeTodosStart(id);
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
  removeTodosStart: id => dispatch(removeTodosStart({ id }))
});

export default connect(null, mapDispatchToProps)(TodoItem);
