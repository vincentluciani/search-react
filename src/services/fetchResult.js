
const pageSize = 20

const fetchResult = async (query) => {

  const url = await buildURL(query)
  const response = await fetch(url)
  let jsonResults = await response.json();

  if (jsonResults && jsonResults.details) { 
    
    jsonResults.start = 1 + (query.page -1) * pageSize
    jsonResults.end = jsonResults.start + pageSize - 1

    if (jsonResults.end > jsonResults.details.totalHits ){
      jsonResults.end = jsonResults.details.totalHits
    }

    return {
      isLoaded: true,
      items: jsonResults
    }
  } else {
    console.log("no result");
    return {
      isLoaded: true,
      items: {details:{
        totalHits: 0
      }}
    }
  }

  
}

const buildURL = async(query) => {
  let url = "https://www.vincent-luciani.com/api/vince/knowledge/search/?term="+query.term+"&pageSize="+pageSize

  if (query.page && query.page > 1){
    const newOfset =  1 + (query.page -1) * pageSize
    url += "&offset=" + newOfset
  }

  if (query.category){
    url += "&category=" + query.category
  }

  if (query.subCategory){
    url += "&subCategory=" + query.subCategory
  }

  return url
}


export default fetchResult