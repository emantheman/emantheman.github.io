import React, { Component } from 'react'

import '../styles/App.scss'

export default class PDFViewer extends Component {

  componentWillMount() {
    this.props.menu.stow()
  }

  componentWillUnmount() {
    this.props.menu.unstow()
  }

  render() {
    const { src } = this.props
    return (
      <embed
        title="pdf"
        style={{ height: '100vh', width: '100vw' }}
        src={ src }
        type="application/pdf"/>
    )
  }
}