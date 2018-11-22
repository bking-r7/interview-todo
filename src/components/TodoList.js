import React, { Component } from 'react';
import styled from 'styled-components';

import {filters, todos} from '../mocks/mock_data';

import Filters from './Filters';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ListContainer = styled.div`
  height: 610px;
  margin-top: 20px;
  overflow: auto;
  padding: 0 10px;
`;

class TodoList extends Component {
  state = {
    todos,
    filter: filters.ALL,
  }

  addTodo(newTodo) {
    this.setState((state) => {
      const updatedTodos = [...this.state.todos];
      updatedTodos.push({
        todo: newTodo,
        completed: false
      });

      return ({
        todos: updatedTodos,
      })
    })
  }

  markComplete = (event) => {
    //TODO implement
  }

  removeTodo = (name) => {
    this.setState((state) => ({
      todos: state.todos.filter(item => item.todo !== name),
    }))
  }

  setFilter = (filter) => {
    // TODO implement
  }

  render() {
    const {filter, todos} = this.state;

    return (
      <Wrapper>
        <TodoForm addTodo={this.addTodo} />

        <Filters
          activeFilter={filter}
          setFilter={this.setFilter}
        />

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
