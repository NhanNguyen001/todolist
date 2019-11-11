import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  display: flex;
  justify-content: space-between;
`;

export const CustomDiv = styled.div`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export const CustomButton = styled.button`
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;
