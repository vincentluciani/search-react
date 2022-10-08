import { render, screen, waitFor  } from '@testing-library/react';

const verifyText = (content, node, htmlToFind) => {
  const hasHTML = (node) => {
    const test = node.textContent
    return node.innerHTML === htmlToFind;
  }
  const nodeHasText = hasHTML(node);
  const childrenDontHaveText = Array.from(node.children).every(
    (child) => !hasHTML(child)
  );
  return nodeHasText && childrenDontHaveText;
}


const customGetByText = htmlFragment => {
  currentCustomGetByText = (content, node) => verifyText(content, node,htmlFragment)
   return screen.queryByText(currentCustomGetByText)
}

export default customGetByText

const checkHTMLAtPositionByRole = (indexToCheck, htmlToMatch, role) => {
  let i=0
  let comparisonResult = false
  const arrayOfAnswers = screen.queryAllByRole(role)

  if (null === arrayOfAnswers){
    return false
  }

  arrayOfAnswers.every((x)=>{ 
    if (i===indexToCheck && x.innerHTML === htmlToMatch){
      comparisonResult = true
      return false
    }
    return true
  })
  return comparisonResult
}

export {checkHTMLAtPositionByRole}