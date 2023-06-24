it("renders without crashing", () => {
  render(<Button />);
});

it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});

// The render function is imported from the react-testing-library.
// The expect function is injected into the global scope by Jest.
// The getByText query function is returned by the render function but is a part of the the dom-testing-library.
// The toBeInTheDocument function is a matcher provided through Jest by the jest-dom library.