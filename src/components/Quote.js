import React from 'react'

const Quote = props => (
  <div className="Quote">
    <span className="author">
      { props.author }
    </span>:
    <blockquote className="content">
      { props.content.map((q, i) => (
        <React.Fragment key={i}>
          {/* Separates multiple quotes from same author */}
          { !!i && <hr align="left"/>}
          <p>
            {/* Breaks up quote with linebreaks if '\n' is present in quote */}
            { q.split('\n').map((line, j) => (
              <React.Fragment key={j}>
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