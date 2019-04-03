import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Path.scss'

const activate = absPath => {
  const links = []
  if (absPath.length > 1) {
    while (absPath.lastIndexOf('/') !== -1) {
      const lastSlash = absPath.lastIndexOf('/')
      const relPath = absPath.slice(lastSlash + 1)
      links.unshift({ absPath, relPath })
      absPath = absPath.slice(0, lastSlash)
    }
  }
  return links.map((link, index) => (
    <React.Fragment key={ index }>
      { link.relPath === '*' ? '' : '/' }
      <Link to={ link.absPath }>
        { link.relPath }
      </Link>
    </React.Fragment>
  ))
}

const Path = props => (
  <span key={props.path} className="Path">
    *{ activate(props.path) }
  </span>
)

export default Path