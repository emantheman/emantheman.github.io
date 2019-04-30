import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Node extends Component {
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

  /**
   * Hides and displays children on click.
   */
  toggleChildren = () => {
    if (this.props.children.length > 0) {
      this.setState(prevState => this.setState({ open: !prevState.open }))
    }
  }

  /**
   * Creates a 'leaf' in the dendrogram.
   * 
   * The type of the leaf corresponds to the type of link:
   *    'view' => <Link/>
   *    'anchor' => <a target="_blank"/>
   *     undefined => <span className="folder"/>
   */
  createLeaf = () => {
    const { open } = this.state
    const { link, name, depth, path } = this.props
    // console.log(path)
    let leaf
    // determines whether leaf should be a plain folder, an external link,
    // or a link to a view and returns the corresponding jsx
    if (link === undefined) { // if not a link, leaf is a folder
      leaf = (
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
    } else if (link.type === 'anchor') { // if type is "anchor", link is external
      leaf = (
        <a
          className="external-link"
          href={ link.url }
          target="_blank"
          rel="noopener noreferrer">{ name }
        </a>
      )
    } else { // if type is "view", link is relative
      leaf = (
        <Link
          to={ link.url }
          target={ link.newTab ? '_blank' : '_self' }
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

    return leaf
  }

  /**
   * Renders the children of the current node.
   */
  createChildren = () => {
    const { depth, path, children } = this.props
    return children.map(({ link, name, children }, index) => (
      <Node
        key={ index }
        name={ name }
        link={ link }
        children={ children }
        path={ path }
        depth={ depth + 1 } />
    ))
  }

  /**
   * Returns the className associated with each folder.
   */
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
    const {
      children,
      depth,
      toggleMenu,
      menuOpen
    } = this.props

    return (
      <li className={ (depth === 0 ? 'tree ' : '') + (depth === 1 ? 'first-gen ' : '')}>
        <span onClick={() => depth === 0 && toggleMenu(open)}>
          {children.length > 0 && 
          <div className={ 'toggle-container ' + this.toggleVariants() }>
            <span className={ 'toggle ' + (!open ? 'collapsed ' : '') + (hover ? 'hover' : '')}/>
          </div>}
          { (menuOpen || depth !== 0) && this.createLeaf() }
        </span>
        {/* subnodes */}
        <ul
          className={ depth === 0 ? 'progeny' : ''}
          style={ depth === 0 ? {marginLeft: '-2px'} : {}}>
          { open && this.createChildren() }
        </ul>
      </li>
    )
  }
}

/**
 * Sets the default props.
 */
Node.defaultProps = {
  depth: 0,
  children: []
}

export default Node
