import React, { Component } from 'react'
import AtvImg from '../components/AtvImg'

class Info extends Component {
  render() {
    return (
      <AtvImg
        layers={[
          'http://kloc.pm/images/back.png',
          'http://kloc.pm/images/front.png',
        ]}
        staticFallback={ 'http://kloc.pm/images/kloc-icon-flattened.jpg' }
        isStatic={ false }
        style={{ width: 480, height: 285 }}/>
    )
  }
}

export default Info