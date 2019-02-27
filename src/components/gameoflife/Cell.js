import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  render() {
    const {
      xPos,
      yPos,
      cellSize,
      alive,
    } = this.props

    return (
      <rect
        className={ 'Cell ' + (alive ? 'alive' : 'dead') }
        x={ xPos }
        y={ yPos }
        width={ cellSize }
        height={ cellSize }
      />
    )
  }
}
