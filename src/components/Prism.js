import React, { Component } from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

// Prism spin animation
const spinKeyframes = {
  '0%': { transform: 'rotateX(0)' },
  '5%': { transform: 'rotateX(-90deg)' },
  '25%': { transform: 'rotateX(-90deg)' },
  '30%': { transform: 'rotateX(-180deg)' },
  '50%': { transform: 'rotateX(-180deg)' },
  '55%': { transform: 'rotateX(-270deg)' },
  '75%': { transform: 'rotateX(-270deg)' },
  '80%': { transform: 'rotateX(-360deg)' },
  '100%': { transform: 'rotateX(-360deg)' }
}

class Prism extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      i: 0,
      j: 1, 
      k: 2
    }
  }

  /**
   * Takes css value in the form '<Number><Units>' and returns ['<Number>', '<Units>'].
   * 
   * E.g., '100px' --> ['100', 'px']
   * @param {String} css - css value to be parsed.
   */
  parseCSSVal = css => {
    const cssVal = css.split('').filter(ch => isNaN(ch) === false).join(''), // filter: is a Number
          cssUnit = css.split('').filter(ch => isNaN(ch) === true).join('')  // filter: is Not a Number
    return [cssVal, cssUnit]
  }

  styles = () => {
    let {
      fontSize,
      positionRight,
      positionBottom,
      positionLeft,
      positionTop,
      height,
      width,
      spinRate,
      startDelay,
      prismBorder,
      prismBoxShadow,
      backgroundColor,
      fontColor
    } = this.props

    // defaults
    spinRate = `${spinRate * 4}s`
    startDelay = startDelay + 's'

    // break val up into number and unit, e.g., [ '100', 'px' ]
    const [ heightValue, heightUnits ] = this.parseCSSVal(height)
    // halfs value and combines with units
    const halfHeight = heightValue / 2 + heightUnits

    // styles
    const styles = StyleSheet.create({
      Prism: {
        position: 'absolute',
        perspective: '800px',
        perspectiveOrigin: `50% ${halfHeight}`,
        right: positionRight,
        left: positionLeft,
        bottom: positionBottom,
        top: positionTop,
        fontSize
      },
      spinner: {
        animationName: [spinKeyframes],
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease',
        animationDuration: spinRate,
        animationDelay: startDelay,
        transformOrigin: `0 ${halfHeight}`,
        margin: '0 auto',
        position: 'relative',
        transformStyle: 'preserve-3d',
        width: width
      },
      side: {
        position: 'absolute',
        border: `1px solid ${prismBorder}`,
        boxShadow: `inset 0 0 20px ${prismBoxShadow}`,
        lineHeight: '1.1em',
        paddingLeft: '7px',
        color: fontColor,
        backgroundColor,
        width,
        height
      },
      face1: {
        transform: `translateZ(${halfHeight})`
      },
      face2: {
        transform: `rotateX(-270deg) translateY(-${halfHeight})`,
        transformOrigin: 'top center'
      },
      face3: {
        transform: `translateZ(-${halfHeight}) rotateX(180deg)`
      },
      face4: {
        transform: `rotateX(-90deg) translateY(${halfHeight})`,
        transformOrigin: 'bottom center'
      }
    })
    return styles
  }

  componentDidMount() {
    const { startDelay } = this.props
    setTimeout(() => {
      this.startCycle()
    }, startDelay * 1000)
  }

  /**
   * Starts cycling through descriptors.
   */
  startCycle = () => {
    const { spinRate } = this.props
    // calls cycle descriptors,
    this.cycleDescriptors()
    // waits until cycle has completed (10 sec),
    setTimeout(() => {
      // recurses.
      this.startCycle()
    }, spinRate * 4000)
  }

  /**
   * Cycles through descriptors.
   */
  cycleDescriptors = () => {
    const maxLen = this.props.descriptors.length
    // Shifts each index up to a new descriptor
    this.setState(prevState => {
      const { i, j, k } = prevState
      return { 
        i: (k + 1) % maxLen,
        j: (j + 3) % maxLen,
        k: (i + 5) % maxLen
      }
    })
  }

  render() {
    const { i, j, k } = this.state
    const { affixed, descriptors } = this.props
    const { Prism, spinner, side, face1, face2, face3, face4 } = this.styles()

    return (
      <div className={css(Prism)}>
        <div className={css(spinner)}>
          <div className={css(side, face1)}>
            { affixed }.
          </div>
          <div className={css(side, face2)}>
            { descriptors[i] }.
          </div>
          <div className={css(side, face3)}>
            { descriptors[j] }.
          </div>
          <div className={css(side, face4)}>
            { descriptors[k] }.
          </div>
        </div>
      </div>
    )
  }
}

Prism.defaultProps = {
  fontSize: '50px',
  fontColor: 'white',
  backgroundColor: 'salmon',
  positionRight: '-58px',
  positionTop: '6px',
  positionLeft: 'unset',
  positionBottom: 'unset',
  height: '60px',
  width: '370px',
  spinRate: 2.5,
  startDelay: 3,
  prismBorder: 'rgba(245, 117, 103, 0.707)',
  prismBoxShadow: 'rgba(247, 158, 158, 0.351)',
}

export default Prism