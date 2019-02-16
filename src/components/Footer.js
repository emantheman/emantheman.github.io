import React from 'react'
import { Link } from 'react-router-dom'

import routes from '../config/routes'
// import '../styles/Footer.scss'

const Footer = props => {

  const { currentPath } = props

  const Links = routes.map((route, index) => {
    const { path, linkText } = route
    return (
      <li>
        <Link key={ index }
              to={ path }
              className={ currentPath === path ? 'current' : undefined }>{ linkText }</Link>
      </li>
    )
  })

  return (
    <React.Fragment>
      <nav className="Footer">
        <ul>
          { Links }
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Footer
