import React, { Component } from 'react'
import Node from './Node'
import '../../styles/FileTree.scss'

export default class FileTree extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const {
      currentPath,
      toggleMenu,
      menuOpen,
      branches: {
        name,
        link,
        descendants
      }
    } = this.props
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
}