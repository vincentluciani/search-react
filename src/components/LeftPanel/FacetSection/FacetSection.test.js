import { render, screen, waitFor  } from '@testing-library/react';
import FacetSection from './FacetSection';
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

  const facetData=[
    {
      "key":"PHP",
      "doc_count":25,
      "subCategory":
      {
        "doc_count_error_upper_bound":0,
        "sum_other_doc_count":0,
        "buckets":[
          {
            "key":"Deal with arrays",
            "doc_count":21
          },
          {
            "key":"Deal with strings",
            "doc_count":4}
        ]
      }
    },
    {
      "key":"JAVA",
      "doc_count":22,
      "subCategory":
        {"doc_count_error_upper_bound":0,
        "sum_other_doc_count":0,
        "buckets":[
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
      }
    }
  ]

  act(() => {
   ReactDOM.createRoot(container).render(<FacetSection facetData={facetData}/>);
  });

  await waitFor(() => expect(screen.getByText("PHP")).toBeInTheDocument());
  expect(screen.getByText("Deal with strings (4)")).toBeInTheDocument
  expect(screen.getByText("Deal with arrays (21)")).toBeInTheDocument
  expect(screen.getByText("JAVA")).toBeInTheDocument
  expect(screen.getByText("Dealing with Arrays (19)")).toBeInTheDocument
  expect(screen.getByText("Data types, variables and tables (1)")).toBeInTheDocument
  expect(screen.getByText("Dealing with Strings (1)")).toBeInTheDocument
  expect(screen.getByText("Logic (1)")).toBeInTheDocument
});

/* TODO : empty list */