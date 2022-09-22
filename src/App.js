import './App.css';
import ResultTable from './components/ResultPanel/ResultTable/ResultTable.js';
import FacetSection from './components/LeftPanel/FacetSection/FacetSection.js';
import React, { useState,useEffect } from 'react';   
//import {fetchResults} from './services/fetchResults.js'
import { useCallback } from 'react';
import fetchResult from './services/fetchResult.js';

var pageOne = { "items":[{"id":"https___www_vincent_luciani_com_sitemap_xml_6","category":"SQL","subCategory":"Select, Count, Order","question":"list of customers which name starts with “ra”.","answer":"where last_name like ‘ra%’"},{"id":"https___www_vincent_luciani_com_sitemap_xml_321","category":"JAVA","subCategory":"Dealing with Arrays","question":"Get the last key of a hash","answer":"myValue=myMap.lastKey();"},{"id":"https___www_vincent_luciani_com_sitemap_xml_261","category":"JAVA","subCategory":"Dealing with Strings","question":"Take characters from position i to j of a string and put in an array of character, putting the first character at position k in this array","answer":"myString.getChars(i,j,myArrayOfChars,k)"},{"id":"https___www_vincent_luciani_com_sitemap_xml_18","category":"SQL","subCategory":"group by","question":"not forget in grouping","answer":"when grouping by a column, must select this column + an agregator of any other column. Never select another column than the ones used in the grouping without any agregator"},{"id":"https___www_vincent_luciani_com_sitemap_xml_103","category":"PHP","subCategory":"Deal with files","question":"Unlock file","answer":"flock($filepointer,LOCK_UN);"},{"id":"https___www_vincent_luciani_com_sitemap_xml_83","category":"PHP","subCategory":"Logic","question":"check if a parameter is null","answer":"is_null($myparameter)"}],
                "details":{"totalHits":324,"aggregations":{"category":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,
                  "buckets":[{"key":"PHP","doc_count":128,
                    "subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,
                      "buckets":[{"key":"Deal with strings","doc_count":44},{"key":"Deal with arrays","doc_count":24},{"key":"Deal with files","doc_count":16},{"key":"Logic","doc_count":16},{"key":"Functions and objects","doc_count":12},{"key":"PHP and SQL","doc_count":8},{"key":"Information about the request","doc_count":6},{"key":"Error handling","doc_count":2}]}},{"key":"JAVA","doc_count":124,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Dealing with Arrays","doc_count":39},{"key":"Dealing with Strings","doc_count":26},{"key":"Classes","doc_count":18},{"key":"Data types, variables and tables","doc_count":14},{"key":"Logic","doc_count":11},{"key":"Error Handling","doc_count":9},{"key":"Interfaces","doc_count":7}]}},{"key":"SQL","doc_count":72,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Advanced Select","doc_count":16},{"key":"Create and Modify Tables","doc_count":11},{"key":"Select, Count, Order","doc_count":11},{"key":"Indexes, Keys","doc_count":10},{"key":"User Administration","doc_count":8},{"key":"Joins","doc_count":7},{"key":"Update Insert Delete","doc_count":6},{"key":"group by","doc_count":3}]}}]}}}}
var pageTwo = {"items":[{"id":"https___www_vincent_luciani_com_sitemap_xml_134","category":"PHP","subCategory":"Deal with strings","question":"Take off spaces from a string","answer":"$result=trim($input);"},{"id":"https___www_vincent_luciani_com_sitemap_xml_65","category":"SQL","subCategory":"Advanced Select","question":"Show for each row in sales the difference between now and the transaction date","answer":"select now(),transation_date,DATEDIFF( now(), transaction_date ) from sales"},{"id":"https___www_vincent_luciani_com_sitemap_xml_187","category":"PHP","subCategory":"Functions and objects","question":"Class B is child of A","answer":"class B extends A"},{"id":"https___www_vincent_luciani_com_sitemap_xml_40","category":"SQL","subCategory":"Indexes, Keys","question":"Add a primary key to the table clients on column id","answer":"alter table clients add primary key(id)"},{"id":"https___www_vincent_luciani_com_sitemap_xml_164","category":"PHP","subCategory":"Deal with strings","question":"Regular expression: tabulators and spaces","answer":"[[:space]]"},{"id":"https___www_vincent_luciani_com_sitemap_xml_81","category":"PHP","subCategory":"Logic","question":"Get result from listing of a folder in a parameter","answer":"$myparameter=`ls -la`"}],"details":{"totalHits":324,"aggregations":{"category":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"PHP","doc_count":128,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Deal with strings","doc_count":44},{"key":"Deal with arrays","doc_count":24},{"key":"Deal with files","doc_count":16},{"key":"Logic","doc_count":16},{"key":"Functions and objects","doc_count":12},{"key":"PHP and SQL","doc_count":8},{"key":"Information about the request","doc_count":6},{"key":"Error handling","doc_count":2}]}},{"key":"JAVA","doc_count":124,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Dealing with Arrays","doc_count":39},{"key":"Dealing with Strings","doc_count":26},{"key":"Classes","doc_count":18},{"key":"Data types, variables and tables","doc_count":14},{"key":"Logic","doc_count":11},{"key":"Error Handling","doc_count":9},{"key":"Interfaces","doc_count":7}]}},{"key":"SQL","doc_count":72,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Advanced Select","doc_count":16},{"key":"Create and Modify Tables","doc_count":11},{"key":"Select, Count, Order","doc_count":11},{"key":"Indexes, Keys","doc_count":10},{"key":"User Administration","doc_count":8},{"key":"Joins","doc_count":7},{"key":"Update Insert Delete","doc_count":6},{"key":"group by","doc_count":3}]}}]}}}}
/* ?term=*&offset=6&pageSize=6 */
var filtered = {"items":[{"id":"https___www_vincent_luciani_com_sitemap_xml_134","category":"PHP","subCategory":"Deal with strings","question":"Take off spaces from a string","answer":"$result=trim($input);"},{"id":"https___www_vincent_luciani_com_sitemap_xml_164","category":"PHP","subCategory":"Deal with strings","question":"Regular expression: tabulators and spaces","answer":"[[:space]]"},{"id":"https___www_vincent_luciani_com_sitemap_xml_160","category":"PHP","subCategory":"Deal with strings","question":"Regular expression: 1 or more (not 0)","answer":"+"},{"id":"https___www_vincent_luciani_com_sitemap_xml_153","category":"PHP","subCategory":"Deal with strings","question":"Number returned when comparing a,b","answer":"-1"},{"id":"https___www_vincent_luciani_com_sitemap_xml_169","category":"PHP","subCategory":"Deal with strings","question":"Give array of strings matching the expression","answer":"$result=preg_match($expression,$inputstring,$arrayoffound);"},{"id":"https___www_vincent_luciani_com_sitemap_xml_161","category":"PHP","subCategory":"Deal with strings","question":"Regular expression : 0, 1 or more","answer":"*"}],"details":{"totalHits":44,"aggregations":{"category":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"PHP","doc_count":44,"subCategory":{"doc_count_error_upper_bound":0,"sum_other_doc_count":0,"buckets":[{"key":"Deal with strings","doc_count":44}]}}]}}}}
var zeroResult={}
/* ?term=*&category=PHP&subCategory=Deal%20with%20strings */




function App(){
  const params = new URLSearchParams(window.location.search);
  const term = params.get('term')
  /*const [term, setTerm] = useState(termFromURL);*/
  //const [searchResults, setSearchResults] = useState(pageOne);
  const [searchResults, setSearchResults] = useState({});
  const totalHits= pageOne.details.totalHits;
  const facetData = pageOne.details.aggregations.category.buckets
  const [myData, setMyData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('INIT');
  const [fetchingError, setFetchingError] = useState(null);

  // const fetchResultsHandler= useCallback(async (term) => {
  //   if (loadingStatus === 'INIT') {
  //   setLoadingStatus('LOADING');
  //   setFetchingError(null);
  //   try {
  //       const response = await fetch("https://www.vincent-luciani.com/search/?term="+term);

  //       if (!response.ok) {
  //           throw new Error('Error while fetching Habits data');
  //       }

  //       const data = await response.json();

  //       setSearchResults(data);
  //       /*setLoadingStatus('LOADED');*/

  //   } catch (error) {
  //       /*setFetchingError(error.message);
  //       setLoadingStatus('ERROR');*/
  //   }
  // }
  // }, []);

  /*useEffect(() => {
    fetchResultsHandler();
  }, [fetchResultsHandler]);*/

  useEffect(() => {
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
    })
    //console.log(searchResults)
    return ()=> mounted = false
  }, [term]);

  const getMoreResults = () => {
    let newSearchResults = searchResults
    newSearchResults.items = [...searchResults.items,...pageTwo.items]
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

/*  
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

*/

export default App;
