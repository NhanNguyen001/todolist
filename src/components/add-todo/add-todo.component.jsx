import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FormContainer, CustomInput, CustomButton } from './add-todo.styles';

import { addTodoStartAsync } from '../../redux/todo/todo.actions';

const AddTodo = ({ addTodoStartAsync }) => {
  const [values, setValues] = useState({ title: '' });

  const { title } = values;

  const handleChange = event => {
    const { value, name } = event.target;
    setValues({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodoStartAsync(title);
    setValues({ title: '' });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CustomInput
        type='text'
        name='title'
        placeholder='Add Todo ...'
        value={title}
        onChange={handleChange}
      />
      <CustomButton type='submit' value='Submit' />
    </FormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addTodoStartAsync: todos => dispatch(addTodoStartAsync(todos))
});

export default connect(null, mapDispatchToProps)(AddTodo);
