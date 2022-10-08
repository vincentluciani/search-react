import { render, screen, waitFor  } from '@testing-library/react';
import Answer from './Answer';
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom/client';
import customGetByText,{checkHTMLAtPositionByRole} from '../../../utils/testHelpers.js'

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

test('answer without highlight', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1"}

  act(() => {
   ReactDOM.createRoot(container).render(<Answer item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("answer 1")).toBeInTheDocument());

  expect(screen.getAllByRole("answer")).toHaveLength(1);

});

test('answer with highlight', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"answer":["<em>answer</em> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<Answer item={item}/>);
  });

  await waitFor(() => expect(customGetByText("<em>answer</em> 1")).toBeInTheDocument());

  expect(screen.getAllByRole("answer")).toHaveLength(1);
 
});

test('answer with attack', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"answer":["<script>answer</script> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<Answer item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("1")).toBeInTheDocument());
  expect(customGetByText("<script>answer</script> 1")).toBe(null)
  expect(screen.getAllByRole("answer")).toHaveLength(1);
 
});
