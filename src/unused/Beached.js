import React from 'react'
import PDFViewer from '../components/PDFViewer'

const Beached = props => (
  <PDFViewer
    menu={ props.menu }
    src="documents/beached.pdf"/>
)

export default Beached