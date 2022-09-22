import './Facet.css';

const Facet= props =>{

  const runNewQueryHandler = () => {
    props.runNewQuery({category:props.category,subCategory:props.subCategory,term:props.term,page:1})
  }
  return(
  <div>
    
     <div onClick={runNewQueryHandler} class="subcategory">{props.subCategory} ({props.doc_count})</div>

  </div>
);
}
export default Facet;
