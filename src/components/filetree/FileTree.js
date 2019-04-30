import React from 'react'

import Node from './Node'
import '../../styles/FileTree.scss'

const FileTree = props => {
  const {
    path,
    toggleMenu,
    menuOpen,
    branches: {
      name,
      link,
      children
    }
  } = props

  return (
    <div className="FileTree">
      <Node
        name={ name }
        link={ link }
        children={ children }
        path={ path }
        toggleMenu={ toggleMenu }
        menuOpen={ menuOpen }/>
    </div>
  )
}

export default FileTree