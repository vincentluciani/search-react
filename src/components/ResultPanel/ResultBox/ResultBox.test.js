import { render, screen, waitFor  } from '@testing-library/react';
import ResultBox from './ResultBox';
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
 
 
  const item = {"category":"category a","question":"question 1","answer":"answer 1"}

  act(() => {
   ReactDOM.createRoot(container).render(<ResultBox item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("question 1")).toBeInTheDocument());
  expect(screen.queryByText("answer 1")).toBe(null)
  expect(screen.getAllByRole("question")).toHaveLength(1)
  expect(screen.getByText("See Answer").toBeInTheDocument)
  expect(screen.queryByText("See Question")).toBe(null)
});

test('see answer', async () => {
 
 
  const item = {"category":"Category a","question":"question 1","answer":"answer 1"}

  act(() => {
   ReactDOM.createRoot(container).render(<ResultBox item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("question 1")).toBeInTheDocument());
  expect(screen.queryByText("answer 1")).toBe(null)
  expect(screen.queryByText("See Question")).toBe(null)
  const seeAnswerLink = screen.getByText("See Answer")
  expect(screen.queryByText("Category a")).toBeInTheDocument
  
  act(() => {
    seeAnswerLink.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText("answer 1")).toBeInTheDocument());
  expect(screen.queryByText("question 1")).toBe(null)
  expect(screen.queryByText("See Answer")).toBe(null)
  expect(screen.queryByText("See Question")).toBeInTheDocument
  expect(screen.queryByText("Category a")).toBeInTheDocument

  const seeQuestionLink = screen.getByText("See Question")
  
  act(() => {
    seeQuestionLink.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText("question 1")).toBeInTheDocument());
  expect(screen.queryByText("answer 1")).toBe(null)
  expect(screen.queryByText("See Question")).toBe(null)
  expect(screen.queryByText("See Answer")).toBeInTheDocument
  expect(screen.queryByText("Category a")).toBeInTheDocument
});

test('question with highlight', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"question":["<em>question</em> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<ResultBox item={item}/>);
  });

  await waitFor(() => expect(customGetByText("<em>question</em> 1")).toBeInTheDocument());

  expect(screen.getAllByRole("question")).toHaveLength(1);
 
});

test('question with attack', async () => {
 
 
  const item = {"question":"question 1","answer":"answer 1", "highlight":{"question":["<script>question</script> 1"]}}

  act(() => {
   ReactDOM.createRoot(container).render(<ResultBox item={item}/>);
  });

  await waitFor(() => expect(screen.getByText("1")).toBeInTheDocument());
  expect(customGetByText("<script>question</script> 1")).toBe(null)
  expect(screen.getAllByRole("question")).toHaveLength(1);
 
});
