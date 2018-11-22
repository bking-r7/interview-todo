import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

import TodoList from './components/TodoList';

const TodoHeader = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader>
          Todo List
        </TodoHeader>

        <TodoList/>
      </div>
    );
  }
}

export default App;
