import React, { Component } from 'react';
import styled from 'styled-components';

import todos from '../mocks/todos';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ListContainer = styled.div`
  height: 70%;
  margin-top: 20px;
  overflow: auto;
`;

class TodoList extends Component {
  state = {
    todos,
  }

  addTodo = (newTodo) => {
    this.setState((state) => ({
      todos: state.todos.push({
        todo: newTodo,
        completed: false
      }),
    }))
  }

  markComplete = (event) => {
    //TODO implement
  }

  removeTodo = (name) => {
    this.setState((state) => ({
      todos: state.todos.filter(item => item.todo !== name),
    }))
  }

  render() {
    const {todos} = this.state;

    return (
      <Wrapper>
        <TodoForm addTodo={this.addTodo} />
        <ListContainer>
          {
            todos.map((todo, index) => (
              <TodoItem
                key={`${todo.todo}-${index}`}
                markComplete={this.markComplete}
                removeTodo={this.removeTodo}
                todo={todo}
              />
            ))
          }
        </ListContainer>
      </Wrapper>
    );
  }
}

export default TodoList;
