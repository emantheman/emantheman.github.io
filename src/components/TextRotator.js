import React, { Component } from 'react'

import { StyleSheet, css } from 'aphrodite/no-important'

class TextRotator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      playAnimation: false,
      animation: 0,
      words: []
    }
  }

  componentWillMount() {
    // initialize keyframes
    this.spinKeyframes = this.initializeKeyframes()
    // set words
    this.setState({ words: this.props.words })
  }

  componentWillUnmount() {
    // flag sentinel
    this._isMounted = false
  }

  /**
   * Uses props to initialize spin animation.
   */
  initializeKeyframes = () => {
    const { reverseRotation } = this.props
    const sign = reverseRotation ? -1 : 1
    const spin = {}
    let deg = 0
    for (let i = 0; i < 4; i++) {
      spin[i] = {}
      spin[i]['0%'] = { transform: `rotateX(${sign*deg}deg)` }
      deg += 90
      spin[i]['18%'] = { transform: `rotateX(${sign*deg}deg)` }
      spin[i]['100%'] = { transform: `rotateX(${sign*deg}deg)` }
    }
    return spin
  }

  componentDidMount() {
    const { startDelay } = this.props
    // sentinel for asynchronous tasks
    this._isMounted = true
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
        animationName: [this.spinKeyframes[animation]],
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

  /**
   * Starts cycling through words.
   */
  cycleAnimation = () => {
    const { spinRate } = this.props
    // convert spinrate from seconds to milliseconds
    const msSpin = spinRate * 1000
    // waits until cycle has completed
    setTimeout(() => {
      // calls next animation.
      this.setState(prevState => {
        // changes words if prism-face is hidden
        this.cyclewords()
        // increments animationCycle
        return { animation: (prevState.animation + 1) % 4 }
      })
      // if component is still mounted, function recurses
      if (this._isMounted) this.cycleAnimation()
      console.log('Recursed!')
    }, msSpin)
  }

  /**
   * TODO: Move only 1, the one right before the current index
   * 
   * @param {Array} arr - an array
   */
  exchangeWord = (arr, i) => {
    // item to transplant
    const plucked = arr[i]
    // words[0 through 3, excluding i] to pin in place
    const pinned = [0,1,2,3].filter(idx => idx !== i).map(idx => [idx, arr[idx]])
    // rest of arr
    const rest = arr.slice(4)
    // put pinned words back in place
    pinned.forEach(([idx, word]) => rest.splice(idx, 0, word))
    // combine sections
    rest.push(plucked)
    return rest
  }

  /**
   * Cycles through words.
   */
  cyclewords = () => {
    // Shifts each index up to a new descriptor
    this.setState(prevState => {
      const { words, animation } = prevState
      const index = (animation + 2) % 4
      return {
        words: this.exchangeWord(words, index)
      }
    })
  }

  render() {
    const { playAnimation, words } = this.state
    const { affixed } = this.props
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
            { affixed || words[0] }.
          </div>
          <div className={css(side, face2)}>
            { words[1] }.
          </div>
          <div className={css(side, face3)}>
            { words[2] }.
          </div>
          <div className={css(side, face4)}>
            { words[3] }.
          </div>
        </div>
      </div>
    )
  }
}

TextRotator.defaultProps = {
  affixed: '',
  reverseRotation: false,
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
  prismBorder: 'unset',
  prismBoxShadow: 'unset',
}

export default TextRotator