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
        <div className="container">
          <TwoCube/>
        </div>
        <span className="description">
          The <strong>Double Cube</strong> component, as a proposed verb in an imagined neocorporate visual language, serves no purpose<br/>except to quench briefly your seemingless endless thirst for nifty little sleek designs.
        </span>
      </div>
    )
  }
}
