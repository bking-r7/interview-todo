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
  const {getByText} = render(<TodoList/>);

  expect(getByText('Buy milk')).toBeTruthy();
  expect(getByText('Clean windows')).toBeTruthy();
  expect(getByText('workout')).toBeTruthy();
  expect(getByText('do laundry')).toBeTruthy();
  expect(getByText('Go to post office')).toBeTruthy();
});
