import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Node extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false,
       hover: false,
       active: false
    }
  }

  toggleChildren = () => {
    if (this.props.descendants.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }

  createLeaf = (link, name, depth, path) => {
    if (link === undefined) {
      return (
        <span
          onClick={ this.toggleChildren }
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseOut={ () => this.setState({ hover: false }) }
          onMouseDown={ () => this.setState({ active: true }) }
          onMouseUp={ () => this.setState({ active: false }) }
          className={ 'folder ' + (depth === 0 ? 'root' : '') }>
          { name }
        </span>
      )
    } else if (link.type === 'anchor') {
      return (
        <a
          className="external-link"
          href={ link.url }
          target="_blank"
          rel="noopener noreferrer">{ name }
        </a>
      )
    } else {
      return (
        <Link
          to={ link.url }
          onClick={ this.toggleChildren }
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseOut={ () => this.setState({ hover: false }) }
          onMouseDown={ () => this.setState({ active: true }) }
          onMouseUp={ () => this.setState({ active: false }) }
          className={ 'view-link ' + (path === link.url ? 'current' : '') }>
          { name }
        </Link>
      )
    }
  }

  createChildren = (children, depth, path) => children.map(({ name: childName, link, descendants: grandChildren }, index) => (
    <Node
      key={ index }
      name={ childName }
      link={ link }
      descendants={ grandChildren || [] }
      currentPath={ path }
      depth={ depth + 1 }/>
  ))

  toggleVariants = () => {
    const { open, hover, active } = this.state
    let classNames = ''
    if (open) classNames += 'open '
    if (hover) classNames += 'hover '
    if (active) classNames += 'active '
    return classNames
  }

  render() {
    // destructure
    const { open } = this.state
    let { descendants: children, name, depth, link, currentPath } = this.props

    // set defaults
    depth = depth || 0
    // const children = this.props.children || []
    children = children || []
    
    return (
      <li className={ depth === 0 ? 'tree' : '' }>
        <span>
          { this.createLeaf(link, name, depth, currentPath) }
          {children.length > 0 && 
          <div className={ 'toggle-container ' + this.toggleVariants() }>
            <span className={ 'toggle ' + (!open ? 'collapsed' : '') }/>
          </div>}
        </span>
        <ul style={ depth === 0 ? {marginTop: '-9px'} : {}}>
          { open && this.createChildren(children, depth, currentPath) }
        </ul>
      </li>
    )
  }
}