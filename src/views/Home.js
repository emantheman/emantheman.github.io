import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Prism from '../components/Prism'
import epithets from '../config/epithets'

import '../styles/Home.scss'

export default class Home extends Component {
  componentWillMount() {
    // stows side menu
    this.props.menu.stow()
  }

  componentWillUnmount() {
    // unstows side menu
    this.props.menu.unstow()
    /* add class which includes hide-animation. */
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
            descriptors={ epithets }
            affixed="web developer"
            spinRate={ 3 }
            startDelay={ 3 }/>
        </div>
      </div>
    )
  }
}