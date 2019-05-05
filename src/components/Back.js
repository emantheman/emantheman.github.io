import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Back.scss'

/**
 * Links back to homepage.
 */
const Back = props => (
  <Link
    style={props.style || {}}
    className="Back"
    to="/">
    &#8629;{props.showInitials ? 'EP' : ''}
  </Link>
)

export default Back