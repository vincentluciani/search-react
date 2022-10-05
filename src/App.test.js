import { render, screen, waitFor  } from '@testing-library/react';
import { MatcherFunction } from '@testing-library/react'
import fetchResult from "./services/fetchResult.js";
import mockFetch   from './mocks/mockFetch.js';
import App from './App';
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom/client';
import customGetByText from './utils/testHelpers.js'


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

  expect(customGetByText("Initialize an <em>array</em> of <em>arrays</em>")).toBeInTheDocument()
  expect(customGetByText("myArray.contains(myObject)")).toBeInTheDocument()
  expect(customGetByText("array_pop($myarray);")).toBeInTheDocument()
  

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("secondPage"))
  })

  let moreButton = screen.getByRole("action-button");
  expect(moreButton).toBeInTheDocument();
  expect(moreButton).toBeEnabled();
  expect(moreButton).toHaveClass("action-button")

  act(() => {
    moreButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-40 from 47 results for/i)).toBeInTheDocument());
  expect(screen.getAllByRole("question")).toHaveLength(40);
  expect(screen.getAllByRole("answer")).toHaveLength(40);

  moreButton = screen.getByRole("action-button");
  expect(moreButton).toBeInTheDocument();
  expect(moreButton).toBeEnabled();

  let additionalElements = [
    "<em>Array</em> with keys and values: sort per values",
    "asort($myarray);",
    "Create an <em>array</em> of objects with the ability to keep the objects in sequence and not accepting duplicates",
    "Interface is Set Can use HashSet for very big <em>arrays</em> - uses a hash table HashSet myArray=new HashSet("
  ]
  
  expect(customGetByText("Initialize an <em>array</em> of <em>arrays</em>")).toBeInTheDocument()
  expect(customGetByText("myArray.contains(myObject)")).toBeInTheDocument()
  expect(customGetByText("<em>Array</em> with keys and values: sort per values")).toBeInTheDocument()
  expect(customGetByText("asort($myarray);")).toBeInTheDocument()
  expect(customGetByText("Take characters from position i to j of a string and put in an <em>array</em> of character, putting the first")).toBeInTheDocument()
  
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("thirdPage"))
  })

  act(() => {
    moreButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-47 from 47 results for/i)).toBeInTheDocument());
  expect(screen.getAllByRole("question")).toHaveLength(47);
  expect(screen.getAllByRole("answer")).toHaveLength(47);

  expect(screen.queryByRole("action-button")).not.toBeInTheDocument

  
  expect(customGetByText("Initialize an <em>array</em> of <em>arrays</em>")).toBeInTheDocument()
  expect(customGetByText("myArray.contains(myObject)")).toBeInTheDocument()
  expect(customGetByText("<em>Array</em> with keys and values: sort per values")).toBeInTheDocument()
  expect(customGetByText("asort($myarray);")).toBeInTheDocument()
  expect(customGetByText("Create an <em>array</em> of objects with the ability to keep the objects in sequence and not accepting duplicates")).toBeInTheDocument()
  expect(customGetByText("Interface is Set Can use HashSet for very big <em>arrays</em> - uses a hash table HashSet myArray=new HashSet(")).toBeInTheDocument()
  expect(customGetByText("Create an <em>array</em> of object with the possibility to use bidirectional fifo functionality ( fifo + lifo")).toBeInTheDocument()
  expect(customGetByText("Interface is Deque Can use class ArrayDeque")).toBeInTheDocument()
  expect(customGetByText("Create an <em>array</em> of objects with the ability to keep the objects in sequence, not accepting duplicates")).toBeInTheDocument()
  expect(customGetByText("Interface is SortedSet Can use TreeSet that gives instant access to lists of ordered data TreeSet myArray=new TreeSet();")).toBeInTheDocument()

  expect(screen.queryByText('< All Categories')).not.toBeInTheDocument


});

test('filter', async () => {
 
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("firstPage"))
  })

  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });
  
  await waitFor(() => expect(screen.getByText(/Showing results 1-20 from 47 results for/i)).toBeInTheDocument());

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("filter"))
  })

  expect(screen.getByText("Deal with strings (4)")).toBeInTheDocument
  expect(screen.getByText("Logic (1)")).toBeInTheDocument

  const linkToClick = screen.getByText("Deal with strings (4)")

  act(() => {
    linkToClick.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-20 from 44 results/i)).toBeInTheDocument());

  expect(screen.queryByText("Logic (1)")).not.toBeInTheDocument
  expect(screen.getByText("Deal with strings (44)")).toBeInTheDocument

  const allCategoriesLink = screen.queryByText('< All Categories')
  expect(allCategoriesLink).toBeInTheDocument

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("firstPage"))
  })

  act(() => {
    allCategoriesLink.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });

  await waitFor(() => expect(screen.getByText(/Showing results 1-20 from 47 results/i)).toBeInTheDocument());

  expect(screen.getByText("Deal with strings (4)")).toBeInTheDocument
  expect(screen.getByText("Logic (1)")).toBeInTheDocument
  expect(screen.queryByText('< All Categories')).not.toBeInTheDocument
})


test('zero result', async () => {
 
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("nothing"))
  })

  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });
  
  await waitFor(() => expect(screen.getByText(/It is not you, it is me/i)).toBeInTheDocument());
  

})

test('override gettext', async () => {
 
  const Hello = () => (
    <div>
      Hello <span>world</span>
    </div>
  );
  render(<Hello />);

  screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === "Hello world";

    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });


})
