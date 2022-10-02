import './ResultTable.css';
import DOMPurify from "dompurify";
/* todo merge the two :*/
import Question from '../QuestionAnswer/Question.js'
import Answer from '../QuestionAnswer/Answer.js'

const ResultTable= props =>{
  return(
  <div className="search-results">
    <table  border="1" cellPadding="0" cellSpacing="0"> 
    <tbody>
      {props.tableData && props.tableData.items && props.tableData.items.map(item=><tr><td>{item.category}</td><td><Question item={item}/></td><td><Answer item={item} /></td></tr>)}
    </tbody>
    </table>
  </div>
);
}
export default ResultTable;

