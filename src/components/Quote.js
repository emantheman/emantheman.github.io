import React from 'react'

const Quote = props => (
  <div className="Quote">
    <a
      className="author"
      href={ props.url }
      rel="noopener noreferrer"
      target="_blank">
      { props.author }
    </a>:
    <blockquote className="content">
      <p>{ props.content }</p>
    </blockquote>
  </div>
)

export default Quote