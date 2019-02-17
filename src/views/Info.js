import React, { Component } from 'react'

class Info extends Component {
  componentDidMount() {
    this.props.flipOverCard(true)
  }
  componentWillUnmount() {
    this.props.flipOverCard(false)
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Info