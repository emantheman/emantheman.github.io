import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Node extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: false
    }
  }

  toggleChildren = () => {
    if (this.props.descendants.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }
  render() {
    const { open } = this.state
    let { descendants: children, name, depth, link, currentPath } = this.props

    // set defaults
    depth = depth || 0
    // const children = this.props.children || []
    children = children || []

    // render children
    const Branches = children.map(({name: childName, link, descendants: grandChildren}, index) => (
      <Node
        key={index}
        name={childName}
        link={link}
        descendants={grandChildren || []}
        currentPath={currentPath}
        depth={depth + 1}/>
    ))

    return (
      <li className={depth === 0 ? 'tree' : ''}>
        <span>
          {link === undefined ?
            name : link.type === 'anchor' ?
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">{name}
            </a> :  
            <Link
              to={link.url}
              onClick={() => this.setState({ open: false })}
              className={ currentPath === link.url ? 'current' : '' }>
              {name}
            </Link>}
          {children.length > 0 && 
          <div
            className={'toggle-container ' + (open ? 'clicked' : '')} 
            onClick={this.toggleChildren}>
            <span className={'toggle ' + (!open ? 'collapsed' : '')}/>
          </div>}
          <ul>
            {open && Branches}
          </ul>
        </span>
      </li>
    )
  }
}