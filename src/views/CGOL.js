import React from 'react'
import Life from '../components/gameoflife/Life'

import '../styles/Life.scss'

const CGOL = () => (
  <div className="CGOL">
    <Life/>
    <div className="description">
      <h2>Conway's Game of Life</h2>
      <p>
        <strong>Life</strong>, a 0-player game devised by mathematician John Horton Conway, is an example
        of "design and organization emerging in the absence of a designer." After providing an initial configuration,
        known as the <i>seed</i> of the game, an observer can lean back and behold as patterns—<i>figures! structures!
        symmatries!</i>—emerge briefly from chaotic soups to metastablize, lotus-like, atop puddles of mud.
        Successive generations of Conway's game are computed by applying simple rules to simple creatures.
      </p>
      <hr/>
      <h3>The Rules</h3>
      <ul>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ul>
      <h3>How It Works</h3>
      <p>
        The initial pattern constitutes the seed of the system. The first generation is created by applying
        the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and
        the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function
        of the preceding one. The rules continue to be applied repeatedly to create further generations.
      </p>
    </div>
  </div>
)

export default CGOL
