import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders greeting message with default name', () => {
  render(<App />);
  
  // More flexible matcher that works even if the text is split
  const greeting = screen.getByText((text) =>
    text.includes('Hello') && text.includes('Pankaj')
  );

  expect(greeting).toBeInTheDocument();
});

test('updates name on input change', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter your name/i);
  fireEvent.change(input, { target: { value: 'Alex' } });

  const greeting = screen.getByText((text) =>
    text.includes('Alex')
  );

  expect(greeting).toBeInTheDocument();
});
