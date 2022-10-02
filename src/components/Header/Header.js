import './Header.css';

const Header= props =>{
  return(
    <div className="result-header-wrapper" role="header">
    { !isNaN(props.totalHits) && (props.totalHits == 0) && <div className="result-header">No result found for {props.term}</div> }
    { !isNaN(props.totalHits) && (props.totalHits > 0) && 
    <div className="result-header">
      <div className="result-summary">Showing results {props.start}-{props.end} from {props.totalHits} results for {props.term}</div>
      <div> | </div>
      <div className={(props.displayType=="boxes")?"display-choice surrounded":""} onClick={props.chooseDisplayBoxes}>Boxes</div>
      <div className={(props.displayType=="table")?"display-choice surrounded":""} onClick={props.chooseDisplayTable}>Table</div>
    </div>
    }
    </div>
);
}
export default Header;

