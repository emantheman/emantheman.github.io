import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    
    // create reference to rect-element
    this.rectRef = React.createRef()

    this.state = {}
  }

  styles = {
    zoomEffect: {
      duration: 200,
      transform: 's1.2', // scale by 1.2x
      transformBack: 's1.0',
    },
    zoomCell: function(cell) {
      cell.toFront().attr({
          transform: this.zoomEffect.transform,
      }).animate({
          transform: this.zoomEffect.transformBack,
      }, this.zoomEffect.duration);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAlive !== this.props.isAlive) {
      // causes the cell to balloon outwards onValueChange
      this.styles.zoomCell(this.rectRef.current)
    }
  }

  render() {
    const {
      xPos,
      yPos,
      cellSize,
      isAlive,
      setPenType
    } = this.props

    return (
      <rect
        className={ 'Cell ' + (isAlive ? 'alive' : 'dead') }
        ref={ this.rectRef }
        x={ xPos }
        y={ yPos }
        width={ cellSize }
        height={ cellSize }
        onMouseDown={ () => setPenType(isAlive) }
      />
    )
  }
}
