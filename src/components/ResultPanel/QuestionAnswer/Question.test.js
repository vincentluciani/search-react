import { render, screen, waitFor  } from '@testing-library/react';
import Question from './Question';
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

test('question without highlight', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1"}

  act(() => {
   ReactDOM.createRoot(container).render(<Question item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("question 1")).toBeInTheDocument());

  expect(screen.getAllByRole("question")).toHaveLength(1);

});

test('question with highlight', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"question":["<em>question</em> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<Question item={item}/>);
  });

  await waitFor(() => expect(customGetByText("<em>question</em> 1")).toBeInTheDocument());

  expect(screen.getAllByRole("question")).toHaveLength(1);
 
});

test('question with attack', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"question":["<script>question</script> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<Question item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("1")).toBeInTheDocument());
  expect(customGetByText("<script>question</script> 1")).toBe(null)
  expect(screen.getAllByRole("question")).toHaveLength(1);
 
});
