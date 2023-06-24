/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";

/*
  describe() is used for grouping a series of tests
  it and test are interchangable
*/
describe("Appointment", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);
  
    return waitForElement(() => getByText("Monday")).then(() => {
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  test("does something else it is supposed to do", () => {
    // ...
  });

  // xit to skip a test
  xit("does something it is supposed to do", () => {
    // ...
  });
    // or if using test
  test.skip("does something it is supposed to do", () => {
    // ...
  });
});