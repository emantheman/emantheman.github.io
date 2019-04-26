import React, { Component } from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

const spinKeyframes = {
  0: {
  '0%': { transform: 'rotateX(0)' },
  '18%': { transform: 'rotateX(-90deg)' },
  '100%': { transform: 'rotateX(-90deg)' },
  },
  1: {
  '0%': { transform: 'rotateX(-90deg)' },
  '18%': { transform: 'rotateX(-180deg)' },
  '100%': { transform: 'rotateX(-180deg)' },
  }, 
  2: {
  '0%': { transform: 'rotateX(-180deg)' },
  '18%': { transform: 'rotateX(-270deg)' },
  '100%': { transform: 'rotateX(-270deg)' },
  },
  3: {
  '0%': { transform: 'rotateX(-270deg)' },
  '18%': { transform: 'rotateX(-360deg)' },
  '100%': { transform: 'rotateX(-360deg)' },
  }
}

class Prism extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      playAnimation: false,
      animation: 0,
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

  /**
   * Returns classes for inline styling!
   */
  styles = () => {
    const {
      fontSize,
      positionRight,
      positionBottom,
      positionLeft,
      positionTop,
      height,
      width,
      spinRate,
      prismBorder,
      prismBoxShadow,
      backgroundColor,
      fontColor
    } = this.props
    const {
      animation
    } = this.state

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
      rectangle: {
        transformOrigin: `0 ${halfHeight}`,
        margin: '0 auto',
        position: 'relative',
        transformStyle: 'preserve-3d',
        width: width
      },
      spin: {
        animationName: [spinKeyframes[animation]],
        animationTimingFunction: 'ease',
        animationDuration: `${spinRate}s`,
        animationFillMode: 'forwards'
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
    // convert delay from seconds to milliseconds
    const msDelay = startDelay * 1000
    // wait for <msDelay>ms to start animation
    setTimeout(() => {
      // playAnimation
      this.setState({ playAnimation: true })
      // begin cycling through animation steps
      this.cycleAnimation()
    }, msDelay)
  }

  /**
   * Starts cycling through descriptors.
   */
  cycleAnimation = () => {
    const { spinRate } = this.props
    // convert spinrate from seconds to milliseconds
    const msSpin = spinRate * 1000
    // waits until cycle has completed
    setTimeout(() => {
      // calls next animation.
      this.setState(prevState => {
        // changes descriptors if prism-face is hidden
        if (prevState.animation === 3) this.cycleDescriptors()
        // increments animationCycle
        return { animation: (prevState.animation + 1) % 4 }
      })
      // after timeout is complete, recurses
      this.cycleAnimation()
    }, msSpin)
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
    const { i, j, k, playAnimation } = this.state
    const { affixed, descriptors } = this.props
    const {
      Prism,
      rectangle,
      spin, 
      side, 
      face1,
      face2,
      face3,
      face4
    } = this.styles()

    return (
      <div className={css(Prism)}>
        <div className={css(rectangle, playAnimation && spin)}>
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
  startDelay: 0,
  prismBorder: 'rgba(245, 117, 103, 0.707)',
  prismBoxShadow: 'rgba(247, 158, 158, 0.351)',
}

export default Prism