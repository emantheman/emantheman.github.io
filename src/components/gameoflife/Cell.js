import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    
    // create reference to rect-element
    this.rectRef = React.createRef()

    this.state = {
      grow: false
    }
  }

  render() {
    const {
      xPos,
      yPos,
      flipCell,
      coordPair,
      paused
    } = this.props

    return (
      <rect
        className={'Cell ' + (paused ? 'paused' : '')}
        ref={ this.rectRef }
        x={ xPos }
        y={ yPos }
        onClick={() => flipCell(coordPair[0], coordPair[1])}
      />
    )
  }
}
