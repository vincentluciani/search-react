
import DOMPurify from "dompurify";

const Answer= item =>{

  let purifyText = (text) =>{
    return DOMPurify.sanitize(text, { ALLOWED_TAGS: ["em"]})
  }
  let getAnswer = item => {
    if ((null != item.highlight) && (null != item.highlight.answer)){
        return purifyText(item.highlight.answer[0])
    } else {
        return item.answer
    }
  }

  return(
      <div role="answer" dangerouslySetInnerHTML={{__html: getAnswer(item.item)}} />
);
}
export default Answer;

