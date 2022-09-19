export function fetchResults(term){
    return fetch("https://www.vincent-luciani.com/search/?term="+term)
    .then(data=>data.json());
}