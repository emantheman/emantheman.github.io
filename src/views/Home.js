import React, { Component } from 'react'
import AtvImg from '../components/AtvImg'
import FlipCard from '../components/FlipCard'

// '../../public/images/redtree.png',
// '../../public/images/sun_zealot.png'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <FlipCard 
        card={{
          front: {
            layers: [
              'http://kloc.pm/images/back.png',
              'http://kloc.pm/images/front.png',
            ],
            staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg",
            isStatic: true
          },
          back: {
            layers: [
              'http://kloc.pm/images/back.png',
              'http://kloc.pm/images/front.png',
            ],
            staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg",
            isStatic: true
          }
        }}
        width={ 320 }
        height={ 190 }/>
    )
  }
}

export default Home
