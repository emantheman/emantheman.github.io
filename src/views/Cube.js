import React, { Component } from 'react'

import DiCube from '../components/DiCube'
import Back from '../components/Back'

import '../styles/Cube.scss'

export default class Cube extends Component {
  componentDidMount() {
    // stows side menu
    this.props.menu.stow()
  }

  render() {
    return (
      <div className="Cube">
        <Back
          style={{color: 'white', fontSize: '1.4em'}}
          showInitials/>
        <div className="container">
          <DiCube alternate/>
        </div>
        <span className="description">
          The <strong>DiCube</strong> component, a proposed verb in an imagined neocorporate visual language,<br/>serves no purpose except to quench briefly your thirst for nifty little sleek designs.
        </span>
      </div>
    )
  }
}
