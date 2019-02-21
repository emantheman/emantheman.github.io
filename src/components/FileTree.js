import React, { Component } from 'react'
import Node from './Node'
import '../styles/FileTree.scss'

export default class FileTree extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { branches: {name, descendants} } = this.props
    return (
      <div className="FileTree">
        <Node
          name={name}
          menuActive={this.state.hover}
          descendants={descendants}/>
      </div>
    )
  }
}