import { render, screen, waitFor  } from '@testing-library/react';
import { MatcherFunction } from '@testing-library/react'
import fetchResult from "./services/fetchResult.js";
import mockFetch   from './mocks/mockFetch.js';
import App from './App';
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom/client';
import withMarkup from './utils/testHelpers.js'

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

/* TODO: search with array, first, second and third page */
test('first page', async () => {
 
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("firstPage"))
  })

  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-20 from 47 results for/i)).toBeInTheDocument());

  expect(screen.getAllByRole("question")).toHaveLength(20);
  expect(screen.getAllByRole("answer")).toHaveLength(20);

  const getByTextWithMarkup = withMarkup(screen.getByText)
  expect(getByTextWithMarkup(/Initialize an <em>/i)).toBeInTheDocument();

  //expect(screen.getByText(/Initialize an <em>/i)).toBeInTheDocument();
  // expect(screen.getByText(/<div role="answer">$myarray=<em>array<\/em> ( <em>array<\/em> (a11,a12), <em>array<\/em> (a21,a22) );<\/div>/i).toBeInTheDocument());
  // expect(screen.getByText(/myArray.contains(myObject)/i).toBeInTheDocument());

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("secondPage"))
  })

  const moreButton = screen.getByRole("action-button");
  expect(moreButton).toBeInTheDocument();
  expect(moreButton).toBeEnabled();
  expect(moreButton).toHaveClass("action-button")

  act(() => {
    moreButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-40 from 47 results for/i)).toBeInTheDocument());
  expect(screen.getAllByRole("question")).toHaveLength(40);
  expect(screen.getAllByRole("answer")).toHaveLength(40);

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("thirdPage"))
  })

  act(() => {
    moreButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-47 from 47 results for/i)).toBeInTheDocument());
  expect(screen.getAllByRole("question")).toHaveLength(47);
  expect(screen.getAllByRole("answer")).toHaveLength(47);

});


test('zero result', async () => {
 
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("nothing"))
  })

  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });
  
  await waitFor(() => expect(screen.getByText(/It is not you, it is me/i)).toBeInTheDocument());
  

})