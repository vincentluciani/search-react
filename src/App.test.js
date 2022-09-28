import { render, screen, waitFor  } from '@testing-library/react';

import fetchResult from "./services/fetchResult.js";
import mockFetch   from './mocks/mockFetch.js';
import App from './App';
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom/client';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});


afterEach(() => {
  jest.restoreAllMocks();
  document.body.removeChild(container);
  container = null;
});


test('first page', async () => {
 
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("firstPage"))
  })

  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-21 from 324 results for/i)).toBeInTheDocument());

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("secondPage"))
  })

  expect(screen.getAllByRole("question")).toHaveLength(6);
  expect(screen.getAllByRole("answer")).toHaveLength(6);
  const moreButton = screen.getByRole("action-button");
  expect(moreButton).toBeInTheDocument();
  expect(moreButton).toBeEnabled();
  expect(moreButton).toHaveClass("action-button")

  act(() => {
    moreButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-41 from 324 results for/i)).toBeInTheDocument());
  expect(screen.getAllByRole("question")).toHaveLength(13);
  expect(screen.getAllByRole("answer")).toHaveLength(13);
});


