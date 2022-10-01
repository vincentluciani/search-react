import './ResultBoxes.css';
import DOMPurify from "dompurify";
/* todo merge the two :*/
import Question from '../QuestionAnswer/Question.js'
import Answer from '../QuestionAnswer/Answer.js'
import { useState } from 'react';
import ResultBox from '../ResultBox/ResultBox.js'


const ResultBoxes = props =>{

  const [questionOrAnswer,setQuestionOrAnswer] = useState('question')

  const toggleQuestionAnswer = () => {
    if (questionOrAnswer == "question"){
      setQuestionOrAnswer('answer')
    } else {
      setQuestionOrAnswer('question')
    }
  }

  return(
  <div className="search-results">
    {
    props.tableData && props.tableData.items && props.tableData.items.map(item=>
      <ResultBox item={item} id={Math.random().toString() } />
    )}
    
  </div>
);
}
export default ResultBoxes;

