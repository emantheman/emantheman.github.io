import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Board from '../components/tictactoe/Board'

import '../styles/TicTacToe.scss'

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  componentWillMount() {
    // stows side menu
    this.props.menu.stow()
  }

  componentWillUnmount() {
    // unstows side menu
    this.props.menu.unstow()
  }

  calculateWinner = squares => {
    // winning combinations
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    // iterate through winning combos
    for (let i = 0; i < lines.length; i++) {
      // store indices
      const [a, b, c] = lines[i]
      // if the square at each index is equal and NOT empty
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // return the winning tokens
        return [squares[a], [a, b, c]]
      }
    }
    // otherwise there is no winner
    return [null, [null]]
  }

  handleClick = i => {
    // copy most recent game
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = [...current.squares]
    
    // exit if game is over OR square is filled
    if (this.calculateWinner(squares)[0] || squares[i]) return
    
    // add token to square
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // setState
    this.setState(prevState => {
      return {
        history: history.concat([{
          squares
        }]),
        stepNumber: prevState.stepNumber + 1,
        xIsNext: !prevState.xIsNext
      }
    })
  }

  jumpTo = step => this.setState({
    stepNumber: step,
    xIsNext: step % 2 === 0
  })

  render() {
    const {
      history,
      stepNumber
    } = this.state
    const current = history[stepNumber]
    const squares = [...current.squares]
    const [token, indices] = this.calculateWinner(squares)
    let status
    // if there is a winner, declare winner
    if (token) {
      status = `Winner: ${token}`
    } else if (squares.every(el => typeof el === 'string')) { 
      // it is a tie if every square is NOT null (and there is no winner)
      status = "It's a tie!"
    } else {
      // otherwise show next player
      status = `Next player is: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    // get past moves
    const Moves = history.map((_, move) => {
      const desc = move ?
        `Go to move #${move}` :
        'Go to game start'
      return (
        <li key={ move }>
          <button onClick={() => this.jumpTo(move)}>
            { desc }
          </button>
        </li>
      )
    })

    return (
      <div className="TicTacToe">
        {/* Title */}
        <h1 className="title">Tic Tac Toe</h1>
        {/* Game */}
        <div className="board-container">
          <Board
            onClick={i => this.handleClick(i)}
            winSquares={ indices }
            squares={ squares } 
            status={ status }
            moves={ Moves }/>
        </div>
        {/* Links back to homepage */}
        <Link
          className="copyright"
          to="/">
          Emmanuel Price ©
        </Link>
      </div>
    )
  }
}
