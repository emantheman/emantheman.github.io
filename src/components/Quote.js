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
      { props.content.map((q, i) => (
        <React.Fragment>
          {/* Separates multiple quotes from same author */}
          { !!i && <hr align="left"/>}
          <p>
            {/* Breaks up quote with linebreaks if '\n' is present in quote */}
            { q.split('\n').map(line => (
              <React.Fragment>
                {line}<br/>
              </React.Fragment>
            )) }
          </p>
          {/* <p key={i}>{ q.split('\n').join(<br/>) }</p> */}
        </React.Fragment>
      ))}
    </blockquote>
  </div>
)

export default Quote