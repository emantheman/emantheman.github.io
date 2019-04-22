import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Prism from '../components/Prism'

import '../styles/Home.scss'

export default class Home extends Component {
  DESCRIPTORS = [
    'Web Developer',
    'Meditator',
    'Book Reader',
    'Hiker',
    'Mentor',
    'Visionary',
  ]

  componentWillUnmount() {
    this.props.menu.unstow()
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <Link
            className="link"
            to="/info/bio">
            Manny Price, 
          </Link>
          <Prism/>
        </div>
      </div>
    )
  }
}