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
    const cols = 90, // number of rows
          rows = 60 // and columns in the grid

    // returns an arbitrary boolean value
    const randBool = () => Math.random() >= .8
    
    this.state = {
      paused: true, // whether the game is paused,
      tick: 200, // time between each frame
      grid: new Array(cols) // a 2d grid of arbitrary boolean values
              .fill(null)
              .map(() => new Array(rows)
                          .fill(null)
                          .map(() => randBool())),
      mouseIsDown: false, // whether the mouse is down (for "drawing" cells)
      penType: false
    }
  }
  
  /**
   * Sets whether the mouse is down and changes the type of the life-giving pen
   * 
   * @param {Boolean} type - the type that the life-pen is being set 
   * (false=kill, true=resurrect)
   */
  setMouseDown = type => this.setState({ mouseIsDown: true, penType: type })

  /**
   * Flips the value of the current cell
   * 
   * @param {Number} x - the x-coordinate of the cell being set
   * @param {Number} y - the y-coordinate of the cell being set
   */
  flipCell = (x, y) => {
    this.setState(prevState => {
      return { 
        grid: prevState.grid.map((col, i) => col.map((cell, j) => {
          // if cell has coordinates (x, y), reverse cell-state
          return i === x && j === y ? !cell : cell
        }))
      }
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
   * @param {Boolean} c - the value of the current cell
   */
  updateCell = (x, y, c) => {
    let n = 0 // number of alive neighbors
    const width = this.state.grid.length, // width and height of the containing svg, respectively
          height = this.state.grid[0].length
    
    // loop through neighbors of current cell
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // skip current cell
        if (i === 0 && j === 0) continue
        // check if neighbor is filled (wrapping around if index is out of bounds)
        if (this.isAlive((x + i + width) % width, (y + j + height) % height)) n++
        // if their are more than 3 living neighbors the cell dies
        if (n > 3) return false
      }
    }

    // if there are 3 neighbors the cell lives
    if (n === 3) return true
    // if there are 2 neighbors the cell stays the same
    if (n === 2) return c
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
      return { grid: prevState.grid.map((col, i) => col.map((cell, j) => this.updateCell(i, j, cell))) }
    })

  }

  /**
   * Draws the game of life
   */
  drawGrid = () => {
    const size = 10, // dimensions of each Cell
          Cells = [], // array of Cells
          xAxis = this.state.grid.length, // width and length of the containing svg, respectively
          yAxis = this.state.grid[0].length

    let xPos = 0, // relative (x, y) coordinates of the Cell
        yPos = 0

    for (let y = 0; y < yAxis; y++) {
      for (let x = 0; x < xAxis; x++) {
        // if the cell is alive
        if (this.state.grid[x][y]) {
          // add a Cell to array of Cells
          Cells.push(
            <Cell
              key={ [x, y] }
              coordPair={ [x, y] }
              xPos={ xPos }
              yPos={ yPos }
              flipCell={ this.flipCell }
            />
          )
        }
        // increase xPosition, moving it right by one Cell-size
        xPos += size
      }
      // since the row is up,
      xPos = 0 // reset xPosition
      yPos += size // and increase yPosition, moving it down by one Cell-size
    }

    setTimeout(() => {
      if (!this.state.paused) {
          this.updateGrid()
      }
    }, this.state.tick)

    return Cells
  }

  /**
   * Returns an object containing the coordinates of an event
   * 
   * @param {Event} e - object containing event data
   */
  getCoordPair = e => {
    const svg = e.nativeEvent.target.ownerSVGElement
    let pt = svg.createSVGPoint()
    pt.x = e.nativeEvent.clientX
    pt.y = e.nativeEvent.clientY
    pt = pt.matrixTransform(svg.getScreenCTM().inverse());
    return {
      x: Math.floor(pt.x / 10),
      y: Math.floor(pt.y / 10) 
    }
  }

  /**
   * Changes the value of the cell at event-coordinates
   * 
   * @param {Event} e - object containing event data
   */
  playGod = e => {
    // pause the GoL
    this.setState({ paused: true })

    // get coordinates of click
    const { x, y } = this.getCoordPair(e)

    // reverse cell-state at coordinates
    this.flipCell(x, y)
  }

  render() {
    return (
      <div className="Life">
        {/* Liquid crystal display for the miracle of Life */}
        <svg height={600} width={900} style={{ border: '1px solid black' }}>
          {/* Lines that form the grid */}
          <g>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" onClick={ this.playGod }/>
          </g>
          {/* Units of Life! */}
          { this.drawGrid() }
        </svg>
        {/* Allows user to interact with the game */}
        <div className="Interface">
          <i
            className={ 'fa fa-play ' + (this.state.paused ? '' : 'unpaused') }
            id="start"
            title="pause/play"
            aria-hidden="true"
            onClick={() => this.setState(prevState => ({ paused: !prevState.paused }))}
          />
          <i
            className="fas fa-info-circle"
            id="tooltip"
          >
            <p id="tooltiptext">
              population: <span id="count">{ this.printPopulation() }</span>
            </p>
          </i>
        </div>
      </div>
    )
  }
}
