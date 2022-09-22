import './FacetSection.css';
import FacetSublist from '../FacetSublist/FacetSublist.js'

const FacetSection= props =>{

  const clickHandler = () => {
    props.runNewQuery({term:props.term,page:1});
  }
  return(
  <div class="filters">
      <div class="category-label">Category</div>
     {props.facetData && props.facetData.map(item => <div>{item.key}<FacetSublist facetList={item.subCategory.buckets} category={item.key} term={props.term} runNewQuery={props.runNewQuery}/></div>)}
     <br /><div onClick={clickHandler} class="all-categories-link">&lt; All Categories</div>
  </div>
);
}
export default FacetSection;

