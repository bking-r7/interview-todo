import React from 'react';
import {render} from 'react-testing-library';
import TodoList from './components/TodoList';

//MOCK DATA as reference
// [
//   {
//     todo: 'Buy milk',
//     completed: false,
//   },
//   {
//     todo: 'Clean windows',
//     completed: true,
//   },
//   {
//     todo: 'workout',
//     completed: false,
//   },
//   {
//     todo: 'do laundry',
//     completed: false,
//   },
//   {
//     todo: 'Go to post office',
//     completed: true,
//   }
// ]

it('renders an input with the ', () => {
  const {getByPlaceholderText} = render(<TodoList/>);

  expect(getByPlaceholderText('Add a Todo...')).toBeTruthy();
});


it('renders the todo list names', () => {
  //TODO Implement test to check for the preloaded todos as list above
});
