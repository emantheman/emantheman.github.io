import React, { Component } from 'react'

export default class Node extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.menuActive !== prevProps.menuActive &&
        !this.props.menuActive) {
      this.setState({ open: false })
    }
  }

  toggleChildren = () => {
    if (this.props.descendants.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }
  render() {
    const { open } = this.state
    let { descendants: children, name, depth } = this.props

    // set defaults
    depth = depth || 0
    // const children = this.props.children || []
    children = children || []

    // render children
    const Branches = children.map(({name: childName, descendants: grandChildren}, index) => (
      <Node
        key={index}
        name={childName}
        descendants={grandChildren || []}
        depth={depth + 1}/>
    ))

    return (
      <li className={depth === 0 ? 'tree' : ''}>
        <span onClick={this.toggleChildren}>
          {name}
          {children.length > 0 && <span className={'toggle ' + (!open ? 'collapsed' : '')}/>}
        </span>
        <ul>
          {open && Branches}
        </ul>
      </li>
    )
  }
}