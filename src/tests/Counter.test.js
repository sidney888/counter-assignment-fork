import {render, screen, fireEvent} from '@testing-library/react'

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount.textContent).toBe('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); //get count
  const incrementButton = screen.getByRole('button', { name: '+' }); //get button
  fireEvent.click(incrementButton); //click using fire event
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); 
  const decrementButton = screen.getByRole('button', { name: '-' });
  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('-1');
});

