import React, { Component } from 'react'

import TextRotator from '../components/TextRotator'

import '../styles/Rotator.scss'

const ADJECTIVES = [
  'sleek',
  'compact',
  'ultra-fast',
  'reactive',
  'monadic',
  'actionable',
  'innovative',
  'elegant',
  'meaningful',
  'efficient'
]

export default class Rotator extends Component {
  state = {
    blend: false,
    spinDown: true,
  }

  componentDidMount() {
    // stow sidemenu
    this.props.menu.stow()
  }

  render() {
    const {
      // blend,
      spinDown
    } = this.state
    return (
      <div className="Rotator">
        <div className="container">
          <span className="proclamation">Our product is</span>
          <TextRotator
            words={ ADJECTIVES }
            spinRate={ 4.2 }
            reverseRotation={ spinDown }
            positionRight={ 0 }
            width="255px"
            backgroundColor="rgba(0,0,0,0.85)"
            fontColor="white"/>
          <label className="options">
            <input type="checkbox" name="blend"/>blend
          </label>
        </div>
        <span className="description">
          The <strong>TextRotator</strong> component, seen here cycling through a list of utterly banal tech buzzwords, is a 'shiny doohickey' and aspires to nothing more. But who needs substance when you look this good, amiright? Allow your eyes, fatigued from the daily slog of bad user interface, to be replenished by the TR's pleasant oscillations.
        </span>
      </div>
    )
  }
}
