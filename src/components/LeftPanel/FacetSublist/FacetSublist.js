import './FacetSublist.css';

const FacetSublist= props =>{
  return(
  <div>
    
     {props.facetList.map(item=><a href={"?term="+props.term+"&category="+props.category+"&subCategory="+item.key}><div class="subcategory">{item.key} ({item.doc_count})</div></a>)}

  </div>
);
}
export default FacetSublist;
