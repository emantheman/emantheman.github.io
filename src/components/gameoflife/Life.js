import React, { Component } from 'react'
import Cell from './Cell'

import '../../styles/Life.scss'

export default class Life extends Component {
  constructor(props) {
    super(props)

    /*
    note: this is calculated from the height(600) and width(900)
    of the grid divided by the size of each cell(10)
    */
    const rows = 60, // number of rows
          cols = 90 // and columns in the grid
  
    this.state = {
      paused: true, // whether the game is paused
      grid: new Array(rows) // a 2d grid of arbitrary boolean values
              .fill(null)
              .map(() => new Array(cols)
                          .fill(null)
                          .map(() => Math.random() >= .5)),
      mouseIsDown: false, // whether the mouse is down (for "drawing" cells)
      penType: false
    }
  }

  /**
   * Sets the type of the life-pen (options: kill (false), revive (true))
   * 
   * NOTE: This method will be passed as a prop to cell components
   * in order to setState of this component. 
   * 
   * @param {Boolean} type - the type that the life-pen is being set
   */
  setPenType = type => this.setState({ penType: type })

  /**
   * Sets the value of the current cell
   * 
   * @param {Number} x - the x-coordinate of the cell being set
   * @param {Number} y - the y-coordinate of the cell being set
   * @param {Boolean} val - the boolean value to which the cell is being set
   */
  setCell = (x, y, val) => {
    this.setState(prevState => {
      return prevState.grid.map((row, i) => row.map((cell, j) => {
        if (i === x && y === j) cell = val
        return cell
      }))
    })
  }

  /**
   * Count the game's current cell population
   */
  countPopulation = () => this.state.grid.flat().filter(cell => cell === true).length

  /**
   * Prints the game's current cell population
   */
  printPopulation = () => {
    const population = this.countPopulation()
    // if the population exceeds 100
    if (population > 100) {
      // returns a string in the form: '<digit exceeding 100, floored to the hundreds place>+'
      // e.g., '500+'
      return +(Math.floor(population/100.0) * 100) + '+'
    } else if (population > 50) { // if the population exceeds 50
      // returns a string in the form: '~<digit exceeding 50, floored to the tens place'
      // e.g., '~70' -- where the '~' character denotes 'approximately'
      return '~' + +(Math.ceil(population/10.0) * 10)
    } else {
      return population
    }
  }

  /**
   * Check if the current cell is alive or dead
   * 
   * @param {Number} x - the x coordinate of the cell being checked
   * @param {Number} y - the y coordinate of the cell being checked
   */
  isAlive = (x, y) => this.state.grid[x][y]

  /**
   * Count the number of TRUE neighbors around the current cell
   * 
   * @param {Number} x - the x coordinate of the current cell
   * @param {Number} y - the y coordinate of the current cell
   * @param {Boolean} isAlive - whether the current cell is alive or not
   */
  updateCell = (x, y, isAlive) => {
    // number of alive neighbors
    let n = 0
    // height and width of grid
    const height = this.state.grid.length,
          width = this.state.grid[0].length
    
    // loop through neighbors of current cell
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // skip current cell
        if (i === 0 && j === 0) continue
        // check if neighbor is filled (wrapping around if index is out of bounds)
        if (this.isAlive((x + i + width) % width, (y + i + height) % height)) n++
        // if their are more than 3 living neighbors the cell dies
        if (n > 3) return false
      }
    }

    // if there are 3 neighbors the cell lives
    if (n === 3) return true
    // if there are 2 neighbors the cell stays the same
    if (n === 2) return isAlive
    // if there is less than 2 the cell dies
    return false
  }

  /**
   * Create the next frame of the grid by applying the rules of the GoL to each cell.
   * 
   * The rules are as follows: "A cell is resurrected if three of its neighbors are living.
   * It remains alive if two or three of its neighbors are living. Otherwise, it perishes."
   */
  updateGrid = () => {
    this.setState(prevState => {
      return { grid: prevState.grid.map((row, i) => row.map((cell, j) => this.updateCell(i, j, cell))) }
    })
  }

  /**
   * Draws the game of life
   */
  drawGrid = () => {
    const size = 10, // dimensions of each Cell
          Cells = [] // array of Cells
    let xPos = 0, // (x, y) coordinates of the Cell
        yPos = 0

    for (let i = 0, len = this.state.grid.length; i < len; i++) {
      for (let j = 0; j < len; j++) {
        // add Cell to array of Cells
        Cells.push(
          <Cell
            key={ [i, j] }
            xPos={ xPos }
            yPos={ yPos }
            size={ size }
            setPenType={ this.setPenType }
            setCell={ this.setCell }
            mouseIsDown={ this.state.mouseIsDown}
            isAlive={ this.state.grid[i][j] }
          />
        )
        // increase xPosition, moving it right by one Cell-size
        xPos += size
      }
      // since the row is up,
      xPos = 0 // reset xPosition
      yPos += size // and increase yPosition, moving it down by one Cell-size
    }

    return Cells
  }

  render() {
    return (
      <div
        className="Life"
        onMouseDown={() => this.setState({ mouseIsDown: true })}
        onMouseUp={() => this.setState({ mouseIsDown: false })}
      >
        {/* Liquid crystal display for the miracle of Life */}
        <svg height={600} width={900}>
          { this.drawGrid() }
        </svg>
        {/* Allows user to play God */}
        <div className="interface">
        </div>
      </div>
    )
  }
}
