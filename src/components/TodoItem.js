import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  align-items: center;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 10px;
  padding: 10px;
  width: 400px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`;

const RemoveButton = styled.div`
  cursor: pointer;
`;

const TodoItem = ({todo, markComplete, removeTodo}) => {
  return (
    <ItemWrapper>
      <p>{todo.todo}</p>

      <ActionsWrapper>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={markComplete}
          value={todo.todo}
        />

        <RemoveButton onClick={() => removeTodo(todo.todo)}>
          Remove
        </RemoveButton>
      </ActionsWrapper>
    </ItemWrapper>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  markComplete: PropTypes.func,
  removeTodo: PropTypes.func,
}

export default TodoItem;
