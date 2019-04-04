import React from 'react'
import Quote from '../components/Quote'
import quotes from '../config/quotes'
import '../styles/Quotes.scss'

const Quotes = () => (
  <div className="Quotes">
    <div className="display">
      { quotes.map((q, i) => (
        <Quote
          key={i}
          url={q.url}
          author={q.author}
          content={q.content}/>
      ))}
    </div>
  </div>
)

export default Quotes