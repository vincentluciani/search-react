import { render, screen, waitFor  } from '@testing-library/react';
import FacetGroup from './FacetGroup';
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

test('show group', async () => {

  const testFunction = ()=>{
    console.log("test")
  }

  const facetList=
 [
    {
      "key":"Dealing with Arrays",
      "doc_count":19
    },
    {
      "key":"Data types, variables and tables",
      "doc_count":1
    },
    {
      "key":"Dealing with Strings","doc_count":1
    },
    {
      "key":"Logic","doc_count":1
    }
  ]

  act(() => {
   ReactDOM.createRoot(container).render(<FacetGroup facetList={facetList} category="JAVA" term="array" runNewQuery={testFunction}  />);
  });

  expect(screen.getByText("Dealing with Arrays (19)")).toBeInTheDocument
  expect(screen.getByText("Data types, variables and tables (1)")).toBeInTheDocument
  expect(screen.getByText("Dealing with Strings (1)")).toBeInTheDocument
  expect(screen.getByText("Logic (1)")).toBeInTheDocument
});

