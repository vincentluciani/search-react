
const pageSize = 20

const fetchResult = async (query) => {

    const url = await buildURL(query)
    const fetchResult = await fetch(url)

    const jsonResults = await fetchResult.json();

    jsonResults.start = 1 + (query.page -1) * pageSize
    jsonResults.end = jsonResults.start + pageSize

    if (fetchResult.status == '200'){
        return {
                        isLoaded: true,
                        items: jsonResults
                }
    } else {
        return {
                        isLoaded: true,
                        error: "response status is not 200"
                      }
        console.log('status of the api call:'+fetchResult.status);
    }

   
  }

  export default fetchResult

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