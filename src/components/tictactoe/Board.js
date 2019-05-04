import React, { Component } from 'react'

import Square from './Square'

export default class Board extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      vsCPU: false,
      level: '1'
    }
  }

  renderSquare = i => (
    <Square
      className={ this.props.winSquares.includes(i) ? 'win' : '' }
      value={ this.props.squares[i] }
      onClick={() => this.props.onClick(i)}/>
  )

  handleVsChange = () => this.setState(prevState => {
    let lvl = prevState.level
    if (prevState) lvl = '1'
    return {
      vsCPU: !prevState.vsCPU,
      level: lvl
    }
  })

  handleLvlChange = e => this.setState({ level: e.target.value })
  
  render() {
    const { status, moves } = this.props
    return (
      <div className="Board">
        {/* Interface */}
        <div className="interface">
          {/* Choose opponent */}
          <label className="switch">
            <input
              type="checkbox"
              checked={ this.state.vsCPU }
              onChange={ this.handleVsChange }/>
            <span className="slider round" />
            <span className={"versus " + (this.state.vsCPU ? 'computer' : '')}>vs computer</span>
          </label>
          {/* If opponent is CPU, choose difficulty */}
          <div className={"level " + (!this.state.vsCPU ? 'hidden' : '')}>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ this.state.level === '1' }
                value="1"
                onChange={ this.handleLvlChange }/>Facile
            </label>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ this.state.level === '2' }
                value="2"
                onChange={ this.handleLvlChange }/>Challenging
            </label>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ this.state.level === '3' }
                value="3"
                onChange={ this.handleLvlChange }/>Impossible
            </label>
          </div>
          {/* Show current game's history */}
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
