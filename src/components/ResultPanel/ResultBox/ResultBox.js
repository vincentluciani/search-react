import './ResultBox.css';

/* todo merge the two :*/
import Question from '../QuestionAnswer/Question.js'
import Answer from '../QuestionAnswer/Answer.js'
import { useState } from 'react';


const ResultBox = props =>{

  const [questionOrAnswer,setQuestionOrAnswer] = useState('question')

  const toggleQuestionAnswer = () => {
    if (questionOrAnswer == "question"){
      setQuestionOrAnswer('answer')
    } else {
      setQuestionOrAnswer('question')
    }
  }

  return(

   <div className="box" id={props.id}>
      <div className="category-label-box">{props.item.category} :</div>
      {(questionOrAnswer=="question") && <Question item={props.item} />}
      {(questionOrAnswer=="answer") && <Answer item={props.item} />}
      {(questionOrAnswer=="question") && <div className="span-toggle" onClick={toggleQuestionAnswer} >See Answer</div>}
      {(questionOrAnswer=="answer") && <div className="span-toggle" onClick={toggleQuestionAnswer} >See Question</div>}      
    </div>
)
}
export default ResultBox;
