import React, { Component } from 'react'

import Life from '../components/gameoflife/Life'
import Back from '../components/Back'

import '../styles/Life.scss'

export default class CGOL extends Component {
  constructor(props) {
    super(props)
  
    this.description = React.createRef()
    this.game = React.createRef()
  }
  

  componentDidMount() {
    // stows side menu
    this.props.menu.stow()
    setTimeout(() => {
      this.description.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 2000)
  }
  
  render() {
    return (
      <div className="CGOL">
        {/* Link back to homepage */}
        <Back style={{ fontSize: '22px', left: '3px' }}/>
        {/* Scroll to this on up-arrow click */}
        <div ref={r => (this.game = r)} />
        {/* Game of Life */}
        <Life scrollDown={ this.scrollToDescription } />
        {/* Description of game */}
        <div className="description" ref={r => (this.description = r)}>
          <h2>Conway's Game of Life</h2>
          <div>
            {/* Click this to scroll to top of screen */}
            <span
              className="toGame"
              onClick={() => this.game.scrollIntoView({ behavior: 'smooth' })}>
              &#8673;
            </span>
            <p>
              <strong>Life</strong>, a <span className="zero">0</span>-player game devised by mathematician John Horton Conway, is an example of "design and organization emerging in the absence of a designer." After providing an initial configuration, known as the <i>seed</i> of the game, nothing else need be done. Simply watch as the game's rules generate mesmerizing—and often surprising—patterns and behaviors.
            </p>
            <p className="special-features">
              (Special features of this version of Life: it is toroidal, meaning the edges wrap around; there are a number of preset seeds that one can choose from; game-speed can be altered by sliding the bar marked 'tick-rate'; one can stop the game and interfere, adding or removing cells by clicking or clicking/dragging on the grid.)
            </p>
            <hr width="96%"/>
            <h3>The Rules</h3>
            <span className="note">
              A neighbor is defined as any horizontally, vertically, or diagonally adjacent square, giving each cell a total of 8 neighbors.
            </span>
            <ol>
              <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
              <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
              <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
              <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
            </ol>
            <h3>How It Works</h3>
            <p>
              The initial pattern constitutes the seed of the system. The first generation is created by applying
              the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and
              the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function
              of the preceding one. The rules continue to be applied repeatedly to create further generations.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
