import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Prism from '../components/Prism'

import '../styles/Home.scss'

const DESCRIPTORS = [
  'meditator',
  'book-reader',
  'creative',
  'hiker',
  'mentor',
  'visionary',
]

export default class Home extends Component {
  componentWillUnmount() {
    this.props.menu.unstow()
    // add class which includes hide-animation.
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
          <Prism
            descriptors={ DESCRIPTORS }
            affixed="web developer"
            spinRate={ 2.5 }
            startDelay={ 3 }/>
        </div>
      </div>
    )
  }
}