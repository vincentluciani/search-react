import './FacetGroup.css';
import FacetItem from '../FacetItem/FacetItem.js'

const FacetGroup= props =>{

  return(
  <div class="facet-group">
    
     {props.facetList && props.facetList.map(item=><FacetItem category={props.category} term={props.term} runNewQuery={props.runNewQuery} subCategory={item.key} doc_count={item.doc_count} />)}

  </div>
);
}
export default FacetGroup;
