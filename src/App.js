
import React, { useState,useEffect } from 'react';   
import Search from './components/Search.js'


function App(){
  const params = new URLSearchParams(window.location.search);
  const urlParams = {
    term: params.get('term'),
    category: params.get('category'),
    subCategory: params.get('subCategory')
  }
   return (
    <div className="App"> 
      <Search urlParams={urlParams} actionColor="#6459c9"/>
    </div> 
  );
}

export default App;
