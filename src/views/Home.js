import React from 'react'
import AtvImg from '../components/AtvImg'
import FlipCard from '../components/FlipCard'

// '../../public/images/redtree.png',
// '../../public/images/sun_zealot.png'
const Home = () => (
  <FlipCard 
    card={{
      front: {
        layers: [
          'http://kloc.pm/images/back.png',
          'http://kloc.pm/images/front.png',
        ],
        staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg",
        isStatic: false
      },
      back: {
        layers: [
          'http://kloc.pm/images/front.png',
          'http://kloc.pm/images/back.png',
        ],
        staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg",
        isStatic: false
      }
    }}
    width={ 320 }
    height={ 190 }/>
)

export default Home
