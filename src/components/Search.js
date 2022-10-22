import './Search.css';
import ResultTable from './ResultPanel/ResultTable/ResultTable.js';
import ResultBoxes from './ResultPanel/ResultBoxes/ResultBoxes.js';
import FacetSection from './LeftPanel/FacetSection/FacetSection.js';
import React, { useState,useEffect } from 'react';   
import fetchResult from '../services/fetchResult';
import Header from './Header/Header.js'
import JumpingDog from './Common/JumpingDog';


const Search = (props) => {
  
  const urlParams = props.urlParams
  const [searchResults, setSearchResults] = useState({});
  const [query, setQuery] = useState({});
  const [displayType, setDisplayType] = useState('table');

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
        } else if (query.page === 1){
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
      term: urlParams.term,
      category: urlParams.category,
      subCategory: urlParams.subCategory
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

  const chooseDisplayTable = () => {
    setDisplayType('table')
  }

  const chooseDisplayBoxes = () => {
    setDisplayType('boxes')
  }

  return (
    <div className="search" style={{"--action-color":props.actionColor}}> 
      <Header start={searchResults.start} 
              end={searchResults.end} 
              totalHits={searchResults && searchResults.details && searchResults.details.totalHits} 
              term={query.term}
              chooseDisplayBoxes={chooseDisplayBoxes}
              chooseDisplayTable={chooseDisplayTable}
              displayType={displayType}/>
      { searchResults && searchResults.details && (searchResults.details.totalHits > 0) &&   
      <div className="search-wrapper">
        <FacetSection facetData={searchResults && searchResults.details && searchResults.details.aggregations.category.buckets} 
                      term={query.term} 
                      category={query.category} 
                      subCategory={query.subCategory}
                      runNewQuery={runNewQuery}
                      hardCodedCategory={urlParams.category}/>
       
        <div className="result-content"> 
          {(displayType == 'table') && <ResultTable tableData={searchResults}/>}
          {(displayType == 'boxes') && <ResultBoxes tableData={searchResults}/>}
          {(searchResults.details.totalHits > searchResults.end) && 
          <div className="action-container">
            <div role="action-button" className="action-button" onClick={getMoreResults}>More Results</div>
          </div>
          }
        </div>       
        

      </div>
      }
      { searchResults && searchResults.details && (searchResults.details.totalHits == 0) &&
          <div className="no-result"> 
          It is not you, it is me : I was seeking, I was striving, I was in it with all my heart, but I failed to find what you were looking for.
          <JumpingDog />
          </div>
      } 
    </div>
  );
}

export default Search;
