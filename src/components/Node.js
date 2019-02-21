import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Node extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false,
       hover: false
    }
  }

  toggleChildren = () => {
    if (this.props.descendants.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }
  render() {
    // destructure
    const { open, hover } = this.state
    let { descendants: children, name, depth, link, currentPath } = this.props

    // set defaults
    depth = depth || 0
    // const children = this.props.children || []
    children = children || []

    // render children
    const Branches = children.map(({ name: childName, link, descendants: grandChildren }, index) => (
      <Node
        key={ index }
        name={ childName }
        link={ link }
        descendants={ grandChildren || [] }
        currentPath={ currentPath }
        depth={ depth + 1 }/>
    ))

    return (
      <li className={ depth === 0 ? 'tree' : '' }>
        <span>
          {link === undefined ?
            <span
              onClick={ this.toggleChildren }
              onMouseEnter={ () => this.setState({ hover: true }) }
              onMouseOut={ () => this.setState({ hover: false }) }>
              { name }
            </span> : link.type === 'anchor' ?
            <a 
              href={ link.url }
              target="_blank"
              rel="noopener noreferrer">{ name }
            </a> :  
            <Link
              to={ link.url }
              onClick={ this.toggleChildren }
              onMouseEnter={ () => this.setState({ hover: true }) }
              onMouseOut={ () => this.setState({ hover: false }) }
              className={ currentPath === link.url ? 'current' : '' }>
              { name }
            </Link>}
          {children.length > 0 && 
          <div className={ 'toggle-container ' + (open ? 'clicked ' : '') + (hover ? 'hovered' : '') }>
            <span className={ 'toggle ' + (!open ? 'collapsed' : '') }/>
          </div>}
          <ul>
            { open && Branches }
          </ul>
        </span>
      </li>
    )
  }
}