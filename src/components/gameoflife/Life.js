import React, { Component } from 'react'
import Cell from './Cell'

export default class Life extends Component {
  constructor(props) {
    super(props)

    /*
    note: this is calculated from the height(600) and width(900)
    of the grid divided by the size of each cell(10)
    */
    const cols = 90, // number of rows
          rows = 60 // and columns in the grid 


    // returns a 2d array of false values
    const blankGrid = () => new Array(cols).fill(null).map(() => new Array(rows).fill(null).map(() => false))
    
    this.state = {
      cols,
      rows,
      paused: true,
      tick: 180, // time between each frame
      grid: blankGrid(),
      default: blankGrid(),
      mouseIsDown: false,
      penType: true,
      config: {
        gosperGlider: [[1, 5],[1, 6],[2, 5],[2, 6],[11, 5],[11, 6],
                      [11, 7],[12, 4],[12, 8],[13, 3],[13, 9],[14, 3],
                      [14, 9],[15, 6],[16, 4],[16, 8],[17, 5],[17, 6],
                      [17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],
                      [22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],
                      [25, 6],[25, 7],[35, 3],[35, 4],[36, 3],[36, 4]],
        spiralFlower: [[30,33],[30,36],[31,37],[31,38],[30,39],[29,38],
                      [29,37],[33,33],[34,34],[35,34],[36,33],[35,32],
                      [34,32],[30,30],[31,29],[31,28],[30,27],[29,28],
                      [29,29],[27,33],[26,34],[26,32],[25,32],[24,33],
                      [25,34],[37,35],[28,40],[23,31],[32,26]].map(([x, y]) => [x+15, y-4]),
        snake: [[25,32],[26,32],[27,32],[28,32],[29,32],[30,32],
                [31,32],[32,32],[34,32],[35,32],[36,32],[37,32],
                [38,32],[42,32],[43,32],[44,32],[51,32],[52,32],
                [53,32],[54,32],[55,32],[56,32],[57,32],[59,32],
                [60,32],[61,32],[62,32],[63,32]].map(([x, y]) => [x, y-1])
      }
    }
  }

  /**
   * Flips the value of the current cell
   * 
   * @param {Number} x - the x-coordinate of the cell being set
   * @param {Number} y - the y-coordinate of the cell being set
   * @param {Boolean} drawCell - whether or not cell is being manually drawn
   */
  flipCell = (x, y, drawCell=false) => {
    this.setState(prevState => {
      return { 
        grid: prevState.grid.map((col, i) => col.map((cell, j) => {
          // if at target coordinates (x, y), alter cell
          if (i === x && j === y) {
            // if cell is being drawn, return pen type
            if (drawCell) return this.state.penType
            // else reverse cell's state
            return drawCell ? this.state.penType : !cell
          }
          // otherwise return cell
          return cell
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
    // find the population
    const population = this.countPopulation()
    if (!this.state.paused && population === 0) this.resetGrid()

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
   * Count the number of TRUE neighbors around the current cell
   * 
   * @param {Number} x - the x coordinate of the current cell
   * @param {Number} y - the y coordinate of the current cell
   * @param {Boolean} c - the value of the current cell
   */
  updateCell = (x, y, c) => {
    const { grid } = this.state
    let n = 0 // number of alive neighbors
    const width = grid.length, // width and height of the containing svg, respectively
          height = grid[0].length
    
    // loop through neighbors of current cell
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // skip current cell
        if (i === 0 && j === 0) continue

        // store neighbor's x and y coordinates,
        // add then mod coordinate by array-length to allow for wrap around
        const nX = (x + i + width) % width, nY = (y + j + height) % height
        // check if neighbor at coordinates is filled
        if (grid[nX][nY]) n++

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
   * Set tick rate for the GoL
   * 
   * @param {Event} setting - destructured event object of the form "setting = event.target.value", i.e.,
   * the currently selected option
   */
  setTickRate = ({ target: { value: setting }}) => {
    let delay
    // set duration of delay in ms
    switch (setting) {
      case '3':
        delay = 120
        break
      case '2':
        delay = 400
        break
      default:
        delay = 180
    }

    // set tick to speed
    this.setState({ tick: delay })
  }

  /**
   * Returns a new blank or randomized grid
   * 
   * @param {Boolean} randomize - if true the new grid is randomized
   */
  newGrid = (randomize=false) => {
    const { cols, rows } = this.state
    // returns false vals
    let cb = () => false
    // if 'randomize' is true then mix in some trues
    if (randomize) cb = () => Math.random() >= .8
    // return a new grid
    return new Array(cols).fill(null).map(() => new Array(rows).fill(null).map(() => cb()))
  }

  /**
   * Configures the grid to the value of the select element
   * 
   * @param {Event} preset - destructured event object of the form "preset = event.target.value", i.e.,
   * the currently selected option
   */
  configureGrid = ({ target: { value: preset }}) => {
    // pause game
    this.setState({ paused: true })
    
    // if the preset is 'random' set rand to true
    const rand = preset === 'random'
    const blank = preset === 'blank' // same for blank

    // set blank grid
    const newGrid = this.newGrid(rand)


    // if the preset is NOT 'random'
    // loop through the preconfigured coordinates
    // and set the newGrid at those coordinates to true
    if (!rand && !blank) {
      this.state.config[preset].forEach((coordPair) => {
        const [x, y] = coordPair
        newGrid[x][y] = true
      })
    }

    // swap grids
    this.setState({ grid: newGrid, default: newGrid })
  }

  /**
   * Create the next frame of the grid by applying the rules of the GoL to each cell.
   * 
   * The rules are as follows: "A cell is resurrected if three of its neighbors are living.
   * It remains alive if two or three of its neighbors are living. Otherwise, it perishes."
   */
  updateGrid = () => this.setState(prevState => {
      return { grid: prevState.grid.map((col, i) => col.map((cell, j) => this.updateCell(i, j, cell))) }
  })

  /**
   * Draws the game of life and calls next frame if the game is !paused
   */
  drawGrid = () => {
    const {
      grid,
      paused,
      tick
    } = this.state

    const size = 10, // dimensions of each Cell
          Cells = [], // array of Cells
          xAxis = grid.length, // width and length of the containing svg, respectively
          yAxis = grid[0].length

    let xPos = 0, // relative (x, y) coordinates of the Cell
        yPos = 0

    for (let y = 0; y < yAxis; y++) {
      for (let x = 0; x < xAxis; x++) {
        // if the cell is alive
        if (grid[x][y]) {
          // add a Cell to array of Cells
          Cells.push(
            <Cell
              key={ [x, y] }
              coordPair={ [x, y] }
              xPos={ xPos }
              yPos={ yPos }
              paused={ paused }
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

    // if the game isn't paused call the next frame
    setTimeout(() => {
      if (!paused) {
          this.updateGrid()
      }
    }, tick)

    return Cells
  }

  /**
   * Pauses and sets grid to current default
   */
  resetGrid = () => {
    // pause game
    this.setState({ paused: true })

    // slight delay
    setTimeout(() => {
      // reset grid to default
      this.setState({ grid: this.state.default })
    }, 150)
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

    // get coordinates of event
    const { x, y } = this.getCoordPair(e)

    console.log('[' + x + ',' + y + ']')

    // reverse cell-state at coordinates
    this.flipCell(x, y)
  }

  /**
   * Attaches event listener to mouse movement
   * @param {Event} e - object containing event data destructured in the form: x/y = e.nativeEvent.offset<X/Y>
   */
  _onMouseMove = ({ nativeEvent: { offsetX: x, offsetY: y }}) => {
    // pause the GoL
    this.setState({ paused: true })

    // correct for cell-size (10)
    x = Math.floor(x/10)
    y = Math.floor(y/10)

    // create "draw" effect
    if (this.state.mouseIsDown) this.flipCell(x, y, true) 
  }

  setPenTypeTrue = e => {
    if (e.shiftKey) this.setState({ penType: false })
  }
  
  setPenTypeFalse = e => {
    if (e.shiftKey) this.setState({ penType: true })
  }

  render() {
    return (
      <div className="Life">
        {/* Liquid crystal display for the miracle of Life */}
        <svg height={600} width={900} style={{ border: '1px solid black' }}>
          {/* Units of Life! */}
          { this.drawGrid() }
          {/* Lines that form the grid */}
          <g>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              onClick={ this.playGod }
              onMouseDown={() => this.setState({ mouseIsDown: true })}
              onMouseUp={() => this.setState({ mouseIsDown: false })}
              onMouseMove={ this.state.mouseIsDown && this._onMouseMove.bind(this) }
              onKeyDown={ this.setPenTypeFalse }
              onKeyUp={ this.setPenTypeTrue }
            />
          </g>
        </svg>
        {/* Allows user to interact with the game */}
        <div className="Interface">
          {/* Pause/Play button */}
          <i
            className={'fa fa-play ' + (this.state.paused ? '' : 'unpaused')}
            id="start"
            title="pause/play"
            aria-hidden="true"
            onClick={() => this.setState(prevState => ({ paused: !prevState.paused }))}
          />
          {/* Reset button */}
          <i
            className="fas fa-undo"
            id="reset"
            title="reset"
            onClick={ this.resetGrid }
          />
          {/* Info tooltip */}
          <i
            className="fas fa-info-circle"
            id="tooltip"
          >
            <p id="tooltiptext">
              population: <span id="count">{ this.printPopulation() }</span>
            </p>
          </i>
          {/* Preset options */}
          <select
            id="presets"
            onChange={ this.configureGrid }>
            <optgroup label="presets">
              <option value="blank">blank</option>
              <option value="random">random</option>
              <option value="gosperGlider">gosperGlider</option>
              <option value="spiralFlower">spiralFlower</option>
              <option value="snake">snake</option>
            </optgroup>
          </select>
          {/* Speed options */}
          <select
            id="speed"
            onChange={ this.setTickRate }>
            <optgroup label="speed">
              <option value="1">medium</option>
              <option value="2">slow</option>
              <option value="3">fast</option>
            </optgroup>
          </select>
        </div>
      </div>
    )
  }
}