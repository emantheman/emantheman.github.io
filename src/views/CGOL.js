import React from 'react'
import Life from '../components/gameoflife/Life'

const CGOL = () => (
  <div className="CGOL">
    <Life/>
    <div>
      <h2>Life</h2>
      <p>
        Conway's Game of Life, aka, "Life," is a 0-player game devised by mathematician John Horton Conway.
        The evolution of the game depends solely on the rules by which cells flourish or die and by the initial configuration.
        A new generation is determined by simultaneously applying the rules (seen below) to each cell from the previous generation. In this way
        one frame is a <i>pure function</i> of the frame that precedes it.
      </p>
      <h3>The Rules</h3>
      <ul>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ul>
    </div>
  </div>
)

export default CGOL
