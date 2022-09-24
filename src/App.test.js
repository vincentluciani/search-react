import { render, screen } from '@testing-library/react';

import mockFetch from "./mocks/mockFetchResult";
import App from './App';

beforeEach(() => {
  jest.spyOn(window, "fetchResult").mockImplementation(mockFetchResult);
})

afterEach(() => {
  jest.restoreAllMocks()
});


test('how header', () => {
  render(<App />);
  const headerText = screen.getByText(/lililo/i);
  expect(headerText).toBeInTheDocument();

});

test('show more button', () => {
  render(<App />);
  const moreButton = screen.getByRole("action-button");
  expect(moreButton).toBeInTheDocument();
  expect(moreButton).toBeEnabled();
  expect(moreButton).toHaveClass("action-button")

});