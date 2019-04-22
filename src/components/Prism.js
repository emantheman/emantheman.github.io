import React, { Component } from 'react'

import '../styles/Prism.scss'

export default class Prism extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      descriptors: [
        'meditator',
        'book-reader',
        'creative',
        'hiker',
        'mentor',
        'visionary',
      ],
      affixed: 'web developer',
      i: 0,
      j: 1, 
      k: 2
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.startCycle()
    }, 3000)
  }

  /**
   * Starts cycling through descriptors.
   */
  startCycle = () => {
    // calls cycle descriptors,
    this.cycleDescriptors()
    // waits until cycle has completed (10 sec),
    setTimeout(() => {
      // recurses.
      this.startCycle()
    }, 10000)
  }

  /**
   * Cycles through descriptors.
   */
  cycleDescriptors = () => {
    // Shifts each index up to a new descriptor
    this.setState(prevState => {
      const { i, j, k, descriptors } = prevState
      return { 
        i: (k + 1) % descriptors.length,
        j: (j + 3) % descriptors.length,
        k: (i + 5) % descriptors.length
      }
    })
  }


  render() {
    const {
      descriptors,
      affixed,
      i, j, k
    } = this.state

    return (
      <div className="Prism">
        <div className="spinner">
          <div className={"side face1"}>
            { affixed }.
          </div>
          <div className={"side face2"}>
            { descriptors[i] }.
          </div>
          <div className={"side face3"}>
            { descriptors[j] }.
          </div>
          <div className={"side face4"}>
            { descriptors[k] }.
          </div>
        </div>
      </div>
    )
  }
}