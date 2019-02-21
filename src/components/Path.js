import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Path.scss'

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
  links.unshift({ absPath: '/', relPath: '*'})
  return links.map((link, index) => (
    <React.Fragment>
      { link.relPath === '*' ? '' : '/' }
      <Link key={ index + 1 } to={ link.absPath }>
        { link.relPath }
      </Link>
    </React.Fragment>
  ))
}

const Path = props => {
  return <span className="Path">{ activate(props.path) }</span>
}

export default Path