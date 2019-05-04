import React, { Component } from 'react'

import Square from './Square'

export default class Board extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      vsCPU: true
    }
  }

  renderSquare = i => (
    <Square
      value={ this.props.squares[i] }
      onClick={() => this.props.onClick(i)}/>
  )

  handleChange = e => this.setState(prevState => {
    return {
      vsCPU: !prevState.vsCPU
    }
  })
  
  render() {
    const { status, moves } = this.props
    return (
      <div className="Board">
        {/* Interface */}
        <div className="interface">
          <label className="switch">
            <input
              type="checkbox"
              onChange={ this.handleChange }/>
            <span className="slider round" />
            <span className={"versus " + (this.state.vsCPU ? 'computer' : '')}>vs computer</span>
          </label>
          <ol>History:{ moves }</ol>
        </div>
        {/* Gameboard */}
        <div className="row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
        {/* Status of game */}
        <div className="status">{ status }</div>
      </div>
    )
  }
}
