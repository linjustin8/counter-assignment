// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../components/counter";

let container = null;
beforeEach(() => {
  // Render the Counter component here
  container = document.createElement("div");
  document.body.appendChild(container);

});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const count = screen.getByText(/0/i);
  expect(count).toBeInTheDocument();
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const incrementButton = screen.getByText(/\+/i);
  userEvent.click(incrementButton);
  const count = screen.getByText(/1/i);
  expect(count).toBeInTheDocument();
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />, container);
  const decrementButton = screen.getByText(/-/i);
  userEvent.click(decrementButton);
  const count = screen.getByText(/-1/i);
  expect(count).toBeInTheDocument();
});
