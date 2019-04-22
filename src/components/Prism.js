import React, { Component } from 'react'

import '../styles/Prism.scss'

export default class Prism extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      descriptors: [
        'web developer.',
        'meditator.',
        'book reader.',
        'leader.',
      ],
      index: 0
    }
  }

  componentDidMount() {
    this.startCycle()
  }

  startCycle = () => {
    setTimeout(() => {
      this.cycleDescriptors()
      this.startCycle()
    }, 3700)
  }

  /**
   * Cycles through array
   */
  cycleDescriptors = () => {
    this.setState(prevState => {
      return { index: (prevState.index + 1) % prevState.descriptors.length }
    })
  }


  render() {
    const Faces = this.state.descriptors.map((face, i) => (
      <div className={"side face" + (i + 1)}>
        { face }
      </div>
    ))

    return (
      <div className="Prism">
        <div className="spinner">
            { Faces }
        </div>
      </div>
    )
  }
}