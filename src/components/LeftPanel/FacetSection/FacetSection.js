import './FacetSection.css';
import FacetGroup from '../FacetGroup/FacetGroup.js'
import Chevron from '../../Common/Chevron.js'
import { useState } from 'react';
import RoundIndicator from '../../Common/RoundIndicator';

const FacetSection= props =>{

  const [hidden,setHidden] = useState(false)

  const toggleHiddenNotHidden = () =>{
    if (hidden){
      setHidden(false)
    } else {
      setHidden(true)
    }
  }
  const clickHandler = () => {
    props.runNewQuery({term:props.term,page:1,category:props.hardCodedCategory});
  }

  let numberOfFilters = (props.subCategory) ? 1 : 0

  return(
  <div className="filters">
      <div className="category-label" onClick={toggleHiddenNotHidden}><div>Category</div><Chevron orientation={hidden ? 'down' : 'up'} /><RoundIndicator numberToShow={numberOfFilters}/></div>
     <div className={'facet-section' + (hidden ? ' hidden' : '')}>
        {props.facetData && props.facetData.map(item => <div className="category">{item.key}<FacetGroup id={Math.random().toString()} facetList={item.subCategory.buckets} category={item.key} term={props.term} runNewQuery={props.runNewQuery}/></div>)}
        <br />{!isNaN(numberOfFilters) && (numberOfFilters > 0 ) && <div onClick={clickHandler} className="all-categories-link">&lt; All Categories</div>}
      </div>
  </div>
);
}
export default FacetSection;

