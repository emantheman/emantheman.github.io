import React, { Component } from 'react'
import Life from '../components/gameoflife/Life'

import '../styles/Life.scss'

export default class CGOL extends Component {
  componentWillMount() {
    this.props.menu.stow()
  }

  componentWillUnmount() {
    this.props.menu.unstow()
  }
  
  render() {
    return (
      <div className="CGOL">
        <Life/>
        <div className="description">
          <h2>Conway's Game of Life</h2>
          <div>
            <p>
              <strong>Life</strong>, a <span className="zero">0</span>-player game devised by mathematician John Horton Conway, is an example of "design and organization emerging in the absence of a designer." After providing an initial configuration, known as the <i>seed</i> of the game, an observer can lean back and behold as patterns, creatures, structures, and symmetries emerge briefly from chaotic soups before devolving back into cellular ash. Successive generations of Conway's game are computed by applying simple rules to simple creatures.
            </p>
            <hr/>
            <h3>The Rules</h3>
            <ol>
              <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
              <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
              <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
              <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
            </ol>
            <span className="footnote"><sup>*</sup>A neighbor is defined as any horizontally, vertically, or diagonally adjacent square, giving each cell a total of 8 neighbors.</span>
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
