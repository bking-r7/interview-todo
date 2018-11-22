Todo Exercise

This is a simple bootstrapped Todo app that needs some updates

## Github
To get started, make a new branch off master to which you will be committing your code.

## Code Changes
A few things aren't hooked up or are broken, we will walk through getting these resolved. Files to review for required changes
1 - TodoList.js
2 - Filters.js

## Tests
In the file TodoList.test.js, we need to write a test to ensure that the list of todo items are being rendered.
To do this, we are using a library called react-testing-library written by Kent C Dodds [Testing Docs](https://github.com/kentcdodds/react-testing-library)

This library gives you some really great functionality to use for writing tests i.e. `render`, `container`, and `getByText`. See test file:

`render` - Render into a container which is appended to document.body

`container` - The containing DOM node of your rendered React Element (rendered using ReactDOM.render). It's a div. This is a regular DOM node, so you can call container.querySelector etc. to inspect the children.

`getByText` - This will search for all elements that have a text node with textContent matching the given TextMatch

For more methods, see docs listed above.

## Complete
Once code is written and tests pass, commit the code to your local branch and then push it up to the remote repo.


### General info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
