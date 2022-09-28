import './Header.css';

const Header= props =>{
  return(
    <div className="result-header-wrapper" role="header">
    <div className="result-header">Showing results {props.start}-{props.end} from {props.totalHits} results for {props.term}</div>
  </div>
);
}
export default Header;

