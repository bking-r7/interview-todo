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
    const {value, checked} = event.currentTarget;

    this.setState((state) => {
      const updatedTodo = this.state.todos.find((t) => t.todo === value);
      if (!updatedTodo) {
        return state;
      }

      const newState =  this.state.todos.filter((todo) => todo !== value)
      updatedTodo.completed = checked
      newState.push(updatedTodo);

      return newState;
    })
  }

  removeTodo = (name) => {
    this.setState((state) => ({
      todos: state.todos.filter(item => item.todo !== name),
    }))
  }

  setFilter = (filter) => {
    this.setState({filter});
  }

  getFilteredTodos = () => {
    const {filter, todos} = this.state;

    return todos.filter((item) => {
      if (filter === filters.COMPLETE) {
        return item.completed
      }
      if (filter === filters.INCOMPLETE) {
        return !item.completed
      }
      return true;
    });
  }

  render() {
    const {filter} = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <Wrapper>
        <TodoForm addTodo={this.addTodo} />

        <Filters
          activeFilter={filter}
          setFilter={this.setFilter}
        />

        <ListContainer>
          {
            filteredTodos.map((todo, index) => (
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
