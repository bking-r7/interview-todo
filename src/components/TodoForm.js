import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 400px;
`;

const StyledInput = styled.input`
  width: 300px;
`;

const SubmitButton = styled.input`
  border: 1px solid white;
  background: #282c34;
  color: white;
  font-size: 14px;
  height: 40px;
  width: 65px;
`;

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  state = {
    newTodo: '',
  }

  updateTodo = (event) => {
    this.setState({
      newTodo: event.currentTarget.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.newTodo) {
      return;
    }

    this.setState({newTodo: ''});
    this.props.addTodo(this.state.newTodo);
  }

  render() {
    return (
      <StyledForm>
        <StyledInput
          type="text"
          onChange={this.updateTodo}
          placeholder="Add a Todo..."
          value={this.state.newTodo}
        />

        <SubmitButton
          disabled={!this.state.newTodo}
          type="submit"
          onClick={this.onSubmit}
        />
      </StyledForm>
    )
  }
}

export default TodoForm;
