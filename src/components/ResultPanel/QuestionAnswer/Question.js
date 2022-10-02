
import DOMPurify from "dompurify";

const Question= item =>{

  let purifyText = (text) =>{
    return DOMPurify.sanitize(text, { ALLOWED_TAGS: ["em"]})
  }
  let getQuestion = item => {
    if (!isNaN(item.highlight) && !isNaN(item.highlight.question)){
        return purifyText(item.highlight.question[0])
    } else {
        return item.question
    }
  }

  return(
      <div role="question" dangerouslySetInnerHTML={{__html: getQuestion(item.item)}} />
);
}
export default Question;

