import './FacetSublist.css';
import Facet from './Facet.js'

const FacetSublist= props =>{

  return(
  <div>
    
     {props.facetList && props.facetList.map(item=><Facet category={props.category} term={props.term} runNewQuery={props.runNewQuery} subCategory={item.key} doc_count={item.doc_count} />)}

  </div>
);
}
export default FacetSublist;
