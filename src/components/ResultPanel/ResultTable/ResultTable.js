import './ResultTable.css';

const ResultTable= props =>{
  return(
  <div class="search-results">
    <table> 
    <tbody>
      {props.tableData && props.tableData.items && props.tableData.items.map(item=><tr><td>{item.category}</td><td>{item.highlight.question[0]}</td><td>{item.answer}</td></tr>)}
    </tbody>
    </table>
  </div>
);
}
export default ResultTable;

