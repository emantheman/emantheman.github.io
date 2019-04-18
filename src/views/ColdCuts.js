import React from 'react'
import PDFViewer from '../components/PDFViewer'

const ColdCuts = props => (
  <PDFViewer
    menu={ props.menu }
    src="documents/cold_cuts.pdf"/>
)

export default ColdCuts