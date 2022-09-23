import './ResultTable.css';
import DOMPurify from "dompurify";

const Answer= item =>{

  let purifyText = (text) =>{
    return DOMPurify.sanitize(text, { ALLOWED_TAGS: ["em"]})
  }
  let getAnswer = item => {
    if (item.highlight && item.highlight.answer){
        return purifyText(item.highlight.answer[0])
    } else {
        return item.question
    }
  }
 /*<div dangerouslySetInnerHTML={__html: purifyText(item.highlight.question[0])} /> */
  return(
      <div dangerouslySetInnerHTML={{__html: getAnswer(item.item)}} />
);
}
export default Answer;

