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

  componentDidUpdate(prevProps) {
    if (prevProps.menuOpen !== this.props.menuOpen) {
      // open menu upstream on click when menu is closed
      this.setState({ open: this.props.menuOpen })
    }
  }

  toggleChildren = () => {
    if (this.props.descendants.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }

  createLeaf = (link, name, depth, path) => {
    const { open } = this.state
    // determines whether leaf should be a plain folder, an external link,
    // or a link to a view and returns the corresponding jsx
    if (link === undefined) {
      return (
        <span
          onClick={ this.toggleChildren }
          onMouseEnter={ () => this.setState({ hover: true }) }
          onMouseOut={ () => this.setState({ hover: false }) }
          onMouseDown={ () => this.setState({ active: true }) }
          onMouseUp={ () => this.setState({ active: false }) }
          className={ 'folder ' + (depth === 0 ? 'root ' : '') + (open ? 'open ' : '') }>
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

  createChildren = (children, depth, path) => children.map(({ link, name: childName, descendants: grandChildren }, index) => (
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
    const { open, hover } = this.state
    let {
      descendants: children,
      name,
      depth,
      link,
      currentPath,
      toggleMenu,
      menuOpen
    } = this.props

    // set defaults
    depth = depth || 0
    // const children = this.props.children || []
    children = children || []

    return (
      <li className={ (depth === 0 ? 'tree ' : '') + (depth === 1 ? 'first-gen ' : '')}>
        <span onClick={() => depth === 0 && toggleMenu(open)}>
          {children.length > 0 && 
          <div className={ 'toggle-container ' + this.toggleVariants() }>
            <span className={ 'toggle ' + (!open ? 'collapsed ' : '') + (hover ? 'hover' : '')}/>
          </div>}
          { (menuOpen || depth !== 0) && this.createLeaf(link, name, depth, currentPath) }
        </span>
        {/* subnodes */}
        <ul
          className={ depth === 0 ? 'progeny' : ''}
          style={ depth === 0 ? {marginLeft: '-2px'} : {}}>
          { open && this.createChildren(children, depth, currentPath) }
        </ul>
      </li>
    )
  }
}