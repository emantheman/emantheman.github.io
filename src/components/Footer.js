import React from 'react'
import { Link } from 'react-router-dom'

import routes from '../config/routes'
// import '../styles/Footer.scss'

const Footer = props => {

  const { currentPath } = props

  const Links = routes.map((route, index) => {
    const { path, linkText } = route
    return <Link key={ index }
                 to={ path }
                 className={ currentPath === path ? 'current' : undefined }>{ linkText }</Link>
  })

  return (
    <React.Fragment>
      <h1 className="wordmark">Emmanuel Price</h1>
      <nav className="footer">
        { Links }
      </nav>
    </React.Fragment>
  )
}

export default Footer
