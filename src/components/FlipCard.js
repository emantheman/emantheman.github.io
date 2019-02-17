import React, { Component } from 'react'
import AtvImg from './AtvImg'
import '../styles/FlipCard.scss'

export default class FlipCard extends Component {
  constructor(props) {
    super(props)

    // destructure props
    const {
      card,
      height,
      width
    } = props

    // set undefined styles to {}
    card.back.style = card.back.style || {}
    card.front.style = card.front.style || {}

    // add height and width to front and back
    card.back.style.width = width
    card.back.style.height = height
    card.front.style.width = width
    card.front.style.height = height
  
    this.state = {
       card,
       width,
       height
    }
  }
  
  render() {
    // destructure state
    const {
      card,
      height,
      width
    } = this.state

    return (
      <div className="FlipCard" style={{ width, height }}>
        <div className="inner">
          <AtvImg
            className="front"
            layers={ card.front.layers }
            staticFallback={ card.front.staticFallback }
            isStatic={ card.front.isStatic }
            style={ card.front.style }/>
          <AtvImg
            className="back"
            layers={ card.back.layers }
            staticFallback={ card.back.staticFallback }
            isStatic={ card.back.isStatic }
            style={ card.back.style }/>
        </div>
      </div>
    )
  }
}
