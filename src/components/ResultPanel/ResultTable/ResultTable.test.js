import { render, screen, waitFor  } from '@testing-library/react';
import ResultTable from './ResultTable';
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

test('simple table', async () => {
 
 
  const tableData = {items:[{"question":"question 1","answer":"answer 1"},{"question":"question 2","answer":"answer 2"}]}
  act(() => {
   ReactDOM.createRoot(container).render(<ResultTable tableData={tableData}/>);
  });

  await waitFor(() => expect(screen.getByText("question 1")).toBeInTheDocument());

  expect(screen.getAllByRole("question")).toHaveLength(2);
  expect(screen.getAllByRole("answer")).toHaveLength(2);

//   expect(customGetByText("Initialize an <em>array</em> of <em>arrays</em>")).toBeInTheDocument()
//   expect(customGetByText("myArray.contains(myObject)")).toBeInTheDocument()
 
});
