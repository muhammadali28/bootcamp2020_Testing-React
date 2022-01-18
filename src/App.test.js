import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/World/i);
  expect(linkElement).toBeInTheDocument();
});

test('check place holder', () => {
  const renderelement=render(<App />);
  const linkElement = renderelement.getByPlaceholderText(/Ali/i);
  expect(linkElement).toBeInTheDocument();
});

