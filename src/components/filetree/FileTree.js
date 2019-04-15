import React from 'react'

import Node from './Node'
import '../../styles/FileTree.scss'

const FileTree = props => {
  const {
    currentPath,
    toggleMenu,
    menuOpen,
    branches: {
      name,
      link,
      descendants
    }
  } = props
  return (
    <div className="FileTree">
      <Node
        name={ name }
        link={ link }
        descendants={ descendants }
        currentPath={ currentPath }
        toggleMenu={ toggleMenu }
        menuOpen={ menuOpen }/>
    </div>
  )
}

export default FileTree