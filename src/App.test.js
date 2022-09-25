import { render, screen, waitFor  } from '@testing-library/react';

import fetchResult from "./services/fetchResult.js";
import mockFetch   from './mocks/mockFetch.js';
import App from './App';
import { act } from "react-dom/test-utils";
// beforeEach(() => {
//   jest.spyOn(window, "fetch").mockImplementation(mockFetch);
//   // jest.spyOn(mockObject, 'fetchResult').mockReturnValue(mockFetchResult);
// })

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockFetch("test")),
//   })
// );

// beforeEach(() => {
//   fetch.mockClear();
// });


// WORKING
beforeEach(() => {

});

// beforeEach(() => {
//   jest.spyOn(window, 'fetch').and.callFake(function(myParam) {
//     return {
//     json: jest.fn().mockResolvedValue(mockFetch(myParam))
//     }
// });

afterEach(() => {
  jest.restoreAllMocks();
});


// global.fetch = jest.fn(endpoint =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockFetch)
//   })
// );

// global.fetch = jest.fn(() =>
// Promise.resolve({
// json: () => Promise.resolve(
//   // mockFetch({page:1,term:"array"})
//   {ok:true}
//    ),
// })
// );

// beforeEach(() => {
//   fetch.mockClear();
//   });


// afterEach(() => {
//   jest.restoreAllMocks()
// });

// https://javascript.plainenglish.io/mock-your-hooks-to-make-testing-simpler-d405ed4cf30b

// jest.mock('./services/fetchResult.js', () => {
//   return () => mockFetchResult({page:1,term:"array"});
// });

// !!!!!! useNumber.mockImplementation(() => 3);


// it("test", async () => {
//   const rate = await fetchResult({term:"array",page:1});

//   expect(fetch).toHaveBeenCalledTimes(1);
// });

// describe('Gold prices', () => {
//   let averagePrice;

//   describe('When the average price is called for 7 days', () => {
//       beforeEach(async () => {
//           averagePrice = await fetchResult({term:"array",page:1});
//       });

//       it('Then the correct average should be returned', () => {
//           expect(averagePrice).toEqual({ average: MOCK_AVERAGE });
//       });
//   });
// });

// test('header', () => {
//   render(<App />);

//   const headerText = screen.getByText(/Showing results 1-41 from 47 results for array/i);
//   expect(headerText).toBeInTheDocument();
  
// });

// it('header async', async () => {
  

//   act(() => {
//     render(<App />);
//   });
//   /*const counter = await waitFor (() => getByText(/Showing results 1-41 from 47 results for array/i))*/ 
//   const headerText = screen.getByText(/Showing results 1-41 from 47 results for array/i);
//   expect(headerText).toBeInTheDocument();
//   expect(counter).toHaveTextContent('1')
// });
test('first page', async () => {
  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("firstPage"))
  })
  render(<App />);

  await waitFor(() => expect(screen.getByText(/Showing results 1-21 from 324 results for/i)).toBeInTheDocument());
  // setTimeout(function () {
  //   const headerText = screen.getByText(/Showing results 1-21 from 324 results for/i);
  //   expect(headerText).toBeInTheDocument();
  // }, 1500);

  jest.spyOn(window, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockFetch("secondPage"))
  })

  /* todo click on more button */
});



// test('show more button', () => {
//   render(<App />);
//   const moreButton = screen.getByRole("action-button");
//   expect(moreButton).toBeInTheDocument();
//   expect(moreButton).toBeEnabled();
//   expect(moreButton).toHaveClass("action-button")

// });