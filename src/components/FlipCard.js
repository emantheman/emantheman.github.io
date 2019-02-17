import React, { Component } from 'react'
import AtvImg from './AtvImg'
import '../styles/FlipCard.scss'
// '../../public/images/redtree.png',
// '../../public/images/sun_zealot.png'

export default class FlipCard extends Component {
  constructor(props) {
    super(props)

    // destructure props
    const {
      card,
      height,
      width,
      flipped
    } = props
  
    this.state = {
       card,
       width,
       height,
       flipped
    }
  }
  
  render() {
    // destructure props
    const {
      card,
      flipped,
      width,
      height
    } = this.props

    // set undefined styles to {}
    card.back.style = card.back.style || {}
    card.front.style = card.front.style || {}
    // add height and width to front and back
    card.back.style.width = width
    card.back.style.height = height
    card.front.style.width = width
    card.front.style.height = height

    if (flipped) {
      card.front.style.display = 'none'
    } else {
      card.back.style.display = 'none'
    }


    return (
      <div className="FlipCard" style={{ width, height }}>
        <div className={'inner ' + (flipped ? 'flipped' : '') }>
          <AtvImg
            className="front"
            layers={ card.front.layers }
            staticFallback={ card.front.staticFallback }
            isStatic={ false }
            style={ card.front.style }/>
          <AtvImg
            className="back"
            layers={ card.back.layers }
            staticFallback={ card.back.staticFallback }
            isStatic={ false }
            style={ card.back.style }/>
        </div>
      </div>
    )
  }
}
