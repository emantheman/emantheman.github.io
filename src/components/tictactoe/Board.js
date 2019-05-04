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
      key={ i }
      className={(this.props.winSquares.includes(i) ? 'win ' : '') +
                 (this.props.cpu.isOpponent && this.props.winSquares.includes(i) && this.props.squares[i] === 'O' ? 'opponent' : '')}
      value={ this.props.squares[i] }
      onClick={() => this.props.onClick(i)}/>
  )
  
  render() {
    const { status, moves, cpu, changeOpponent, changeLevel } = this.props
    return (
      <div className="Board">
        {/* Interface */}
        <div className="interface">
          {/* Choose opponent */}
          <label className="switch">
            <input
              type="checkbox"
              checked={ cpu.isOpponent }
              onChange={() => changeOpponent()}/>
            <span className="slider round" />
            <span className={"versus " + (cpu.isOpponent ? 'computer' : '')}>vs computer</span>
          </label>
          {/* If opponent is CPU, choose difficulty */}
          <div className={"level " + (!cpu.isOpponent ? 'hidden' : '')}>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ cpu.level === '1' }
                value="1"
                onChange={e => changeLevel(e)}/>Facile
            </label>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ cpu.level === '2' }
                value="2"
                onChange={e => changeLevel(e)}/>Challenging
            </label>
            <label>
              <input
                className="choice"
                type="radio"
                checked={ cpu.level === '3' }
                value="3"
                onChange={e => changeLevel(e)}/>Impossible
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
