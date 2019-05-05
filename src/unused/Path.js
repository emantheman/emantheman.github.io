import React from 'react'

import '../../styles/Path.scss'

const Path = props => (
  <span key={props.path} className="Path">
    *{ props.path }
  </span>
)

export default Path