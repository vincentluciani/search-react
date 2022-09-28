import './App.css';
import ResultTable from './components/ResultPanel/ResultTable/ResultTable.js';
import FacetSection from './components/LeftPanel/FacetSection/FacetSection.js';
import React, { useState,useEffect } from 'react';   
import fetchResult from './services/fetchResult';
import Header from './components/Header/Header.js'

function App(){
  const params = new URLSearchParams(window.location.search);

  const [searchResults, setSearchResults] = useState({});
  const [query, setQuery] = useState({});

  const [loadingStatus, setLoadingStatus] = useState('INIT');
  const [fetchingError, setFetchingError] = useState(null);

  const fetchResultsHandler= (query) => {
    console.log("calling api")
    let mounted = true;
    fetchResult(query)
    .then(result => {
      console.log("mounted:")
      console.log(mounted)
      if(mounted){
        if(query.page > 1 && result.items.items){
          let newSearchResults = {...searchResults}
          newSearchResults.items = [...searchResults.items,...result.items.items]
          newSearchResults.start = 1
          newSearchResults.end = result.items.end
          setSearchResults(newSearchResults)
        } else if (query.page == 1){
          result.items.start = 1
          result.items.end = result.items.end
          setSearchResults(result.items)
        }

      }
    }
   )
    return ()=> mounted = false
  };

  
  useEffect(() => {
    const query = {
      page: 1,
      term: params.get('term'),
      category: params.get('category'),
      subCategory: params.get('subCategory')
    }
    setQuery(query)
    fetchResultsHandler(query)
  }, []);

  const runNewQuery = (query) => {
    setQuery(query)
    fetchResultsHandler(query)
    console.log(query)
  }
  const getMoreResults = () => {
    let newQuery = query
    newQuery.page = query.page + 1
    fetchResultsHandler(newQuery)
  }

  return (
    <div className="App"> 
      <Header start={searchResults.start} end={searchResults.end} totalHits={searchResults && searchResults.details && searchResults.details.totalHits} term={query.term}/>
      <div className="search-wrapper">
        <FacetSection facetData={searchResults && searchResults.details && searchResults.details.aggregations.category.buckets} term={query.term} runNewQuery={runNewQuery}></FacetSection>
        <div className="result-content"> 
            <ResultTable tableData={searchResults}/>
            <div className="action-container"><div role="action-button" className="action-button" onClick={getMoreResults}>More Results</div></div>
            
        </div>

      </div>
    </div>
  );
}

export default App;
