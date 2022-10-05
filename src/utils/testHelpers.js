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
   return screen.getByText(currentCustomGetByText)
}

export default customGetByText