import React, { Component } from 'react'

import '../styles/App.scss'

export default class PDFViewer extends Component {

  componentDidMount() {
    this.props.menu.stow()
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