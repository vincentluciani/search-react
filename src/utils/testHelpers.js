import { MatcherFunction } from '@testing-library/react'

const withMarkup = (query) => (text) =>
  query((node) => {
    const hasText = (node) => node.textContent === text
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child)
    )
    return hasText(node) && childrenDontHaveText
  })

export default withMarkup