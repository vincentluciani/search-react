
const fetchResult = async (term) => {
    const fetchResult = await fetch("https://www.vincent-luciani.com/api/vince/knowledge/search/?term="+term+"&pageSize=20")

    const jsonResults = await fetchResult.json();

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
