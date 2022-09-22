import './App.css';
import ResultTable from './components/ResultPanel/ResultTable/ResultTable.js';
import FacetSection from './components/LeftPanel/FacetSection/FacetSection.js';
import React, { useState,useEffect } from 'react';   
import { useCallback } from 'react';
import fetchResult from './services/fetchResult.js';

function App(){
  const params = new URLSearchParams(window.location.search);
  const term = params.get('term')
  const [searchResults, setSearchResults] = useState({});

  const [loadingStatus, setLoadingStatus] = useState('INIT');
  const [fetchingError, setFetchingError] = useState(null);


  const fetchResultsHandler= useCallback(async (term) => {
    console.log("calling api")
    let mounted = true;
    fetchResult(term)
    .then(result => {
      console.log("mounted:")
      console.log(mounted)
      if(mounted){
        setSearchResults(result.items)
        console.log(result.items)
      }
    }
   )
    return ()=> mounted = false
  });

  
  useEffect(() => {
    fetchResultsHandler(term);
  }, [fetchResultsHandler,term]);

 
  const getMoreResults = () => {
    let newSearchResults = searchResults
   /* newSearchResults.items = [...searchResults.items,...pageTwo.items]*/
    setSearchResults(newSearchResults)
  }

  return (
    <div className="App"> 
      <div className="result-header-wrapper">
        <div class="result-header">Showing results x-y from {searchResults && searchResults.details && searchResults.details.totalHits} results for {term}</div>
      </div>
      <div class="search-wrapper">
        <FacetSection facetData={searchResults && searchResults.details && searchResults.details.aggregations.category.buckets} term={params.get('term')}></FacetSection>
        <div class="result-content"> 
            <ResultTable tableData={searchResults && searchResults.items}/>
            <div class="action-container"><div class="action-button" onClick={getMoreResults}>More Results</div></div>
            
        </div>

      </div>
    </div>
  );
}

export default App;
