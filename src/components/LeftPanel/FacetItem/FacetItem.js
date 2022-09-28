import './FacetItem.css';

const FacetItem= props =>{

  const runNewQueryHandler = () => {
    props.runNewQuery({category:props.category,subCategory:props.subCategory,term:props.term,page:1})
  }
  return(
  <div>
    
     <div onClick={runNewQueryHandler} className="subcategory">{props.subCategory} ({props.doc_count})</div>

  </div>
);
}
export default FacetItem;
