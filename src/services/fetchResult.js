
const pageSize = 20

const fetchResult = async (query) => {

  const url = await buildURL(query)
  const response = await fetch(url)
  let jsonResults = await response.json();

  if (jsonResults && jsonResults.details) { 
    
    jsonResults.start = 1 + (query.page -1) * pageSize
    jsonResults.end = jsonResults.start + pageSize
    return {
      isLoaded: true,
      items: jsonResults
    }
  } else {
    console.log("http response not ok");
    return {
      isLoaded: true,
      error: "response status is not 200"
    }
  }

  
}

const buildURL = async(query) => {
  let url = "https://www.vincent-luciani.com/api/vince/knowledge/search/?term="+query.term+"&pageSize="+pageSize

  if (query.page && query.page > 1){
    const newOfset = query.page * pageSize
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