import './FacetGroup.css';
import FacetItem from '../FacetItem/FacetItem.js'

const FacetGroup= props =>{

  return(
  <div className="facet-group">
    
     {props.facetList && props.facetList.map(item=><FacetItem id={Math.random().toString()} category={props.category} term={props.term} runNewQuery={props.runNewQuery} subCategory={item.key} doc_count={item.doc_count} />)}

  </div>
);
}
export default FacetGroup;
