import './ResultTable.css';

const ResultTable= props =>{
  return(
  <div class="search-results">
    <table>
    <tbody>
      {props.tableData.map(item=><tr><td>{item.category}</td><td>{item.question}</td><td>{item.answer}</td></tr>)}
    </tbody>
    </table>
  </div>
);
}
export default ResultTable;

