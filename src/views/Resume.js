import React from 'react'
import PDFViewer from '../components/PDFViewer'

const Resume = props => (
  <PDFViewer
    menu={ props.menu }
    src="documents/resume.pdf"/>
)

export default Resume