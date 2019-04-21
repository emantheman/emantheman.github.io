import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       descriptors: [
        'Web Dev',
        'Meditator',
        'Reader of Books',
        'Hiker',
        'Occasional Jogger',
        'Mentor',
        'Visionary',
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

  componentWillUnmount() {
    this.props.menu.unstow()
  }

  /**
   * Increments index in state.
   */
  cycleDescriptors = () => {
    this.setState(prevState => {
      const i = prevState.index + 1 > prevState.descriptors.length - 1 ? 0 : prevState.index + 1
      return { index: i }
    })
  }

  render() {
    const {
      descriptors,
      index
    } = this.state
    return (
      <div className="Home">
        <div className="supercontainer">
          <div className="container">
            <Link
              className="link"
              to="/info/bio">
              <span className="text">Manny</span><br/>
              <span className="text">Price</span>
            </Link>
          </div>
          <div key={index} className={"mystery-block " + (
            descriptors[index].length > 12 ? 'lg-text' : ''
          )}>
            { descriptors[index] }
          </div>
        </div>
      </div>
    )
  }
}