import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextRotator from '../components/TextRotator'
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
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <Link
            className="link"
            to="/info/bio">
            Emmanuel Price, 
          </Link>
          <TextRotator
            words={ epithets }
            positionRight={ '-105px' }
            spinRate={ 4.2 }
            reverseRotation/>
        </div>
      </div>
    )
  }
}