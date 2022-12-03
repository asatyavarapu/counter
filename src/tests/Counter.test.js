// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterName = screen.getByText(/Counter/i);
  expect(counterName).toBeInTheDocument;
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/0/i);
  expect(count) = 0;
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/1/i);
  expect(count) = 1;
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/0/i);
  expect(count) = 0;
});
