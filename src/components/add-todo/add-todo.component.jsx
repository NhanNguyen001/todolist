import React, { useState } from 'react';
import { FormContainer, CustomInput, CustomButton } from './add-todo.styles';

const AddTodo = () => {
  const [values, setValues] = useState({ title: '' });

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.addTodo(this.state.title);
  //   this.setState({ title: '' });
  // };

  const { title } = values;

  const handleChange = event => {
    const { value, name } = event.target;
    setValues({ [name]: value });
  };

  return (
    <FormContainer>
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

export default AddTodo;
