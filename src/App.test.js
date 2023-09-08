import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav bar', () => {
  render(<App />);
  const linkElement = screen.getByText(/YourUni/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hero title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find the university that's right for you./i);
  expect(linkElement).toBeInTheDocument();
});
