import React from 'react'

const Cell = ({ xPos, yPos, paused, penType }) => (
  <rect
    className={'Cell ' + (paused ? 'paused ' : '')}
    x={ xPos }
    y={ yPos }
  />
)

export default Cell