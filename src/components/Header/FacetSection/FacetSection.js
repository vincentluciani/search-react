import './FacetSection.css';
import FacetSublist from './FacetSublist.js.js'

const FacetSection= props =>{
  return(
  <div class="filters">
      <div class="category-label">Category</div>
     {props.facetData && props.facetData.map(item => <div>{item.key}<FacetSublist facetList={item.subCategory.buckets} category={item.key} term={props.term}/></div>)}
     <br /><a href={"?term"+props.term} ><div>&lt; All Categories</div></a>
  </div>
);
}
export default FacetSection;

