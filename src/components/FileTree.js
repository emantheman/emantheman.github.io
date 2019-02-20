import React, { Component } from 'react'
import '../styles/FileTree.scss'

export default class FileTree extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      treeHidden: true
    }
  }
  
  toggleTreeView = () => this.setState(prevState => this.setState({ treeHidden: !prevState.treeHidden }))

  render() {
    const {
      treeHidden
    } = this.state

    return (
      <div className="FileTree">
        <span
          className={'toggle ' + (treeHidden ? 'collapsed' : '')}
          onClick={this.toggleTreeView}/>
      </div>
    )
  }
}
