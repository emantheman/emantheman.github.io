import React, { Component } from 'react'

import TwoCube from '../components/TwoCube'

import '../styles/Cube.scss'

export default class Cube extends Component {
  componentDidMount() {
    // stows side menu
    this.props.menu.stow()
  }

  render() {
    return (
      <div className="Cube">
        <TwoCube/>
      </div>
    )
  }
}
