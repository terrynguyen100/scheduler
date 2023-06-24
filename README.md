# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Note
This repo is for learning/practicing about Custom Hooks, Testing

### Rules of Custom Hooks
Do not call Hooks inside loops, conditions or nested functions
Only call Hooks from inside React components
A custom Hook is a helper function that must start with the word "use"

### prop-types library
A library by React team used for validating component props
For ex, validating that a prop, that is supposed to be an array, is an array
Note: TypeScript and Flow enable static type checking. The prop-types library provides runtime validation.
Documentation: https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes

### react-testing-library
A testing library for React, provides React specific helper functions, including render, cleanup and act.
### Jest
A testing framework that provides defaults matchers.
Documentation: https://jestjs.io/docs/expect

### jest-dom
A library that provides the DOM specific matchers, an extension library of Jest.
For testing the DOm-related behavior of your components.
Documentation: https://github.com/testing-library/jest-dom

### dom-testing-library
A JavaScript library for testing the DOM of web application.
This library provides the queries, which is a combination of a query variant and a query type.
For ex, Variant getBy + Type ByText => getByText

By combining these helpers, we can provide these assertions:
* `expect(getByText("Default")).toHaveClass("button");`
* `expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");`
* `expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");`
* Review src/components/__tests__/Form.test.js to see examples

### Mock modules