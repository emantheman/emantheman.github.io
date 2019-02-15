import React from 'react'
import AtvImg from '../components/AtvImg'

// '../../public/images/redtree.png',
// '../../public/images/sun_zealot.png'
const Home = () => (
  <div>
    <AtvImg
      layers={[
        'http://kloc.pm/images/back.png',
        'http://kloc.pm/images/front.png',
      ]}
      staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
      isStatic={false}
      style={{ margin: '0 auto', width: 640, height: 380 }}
    />
  </div>
)

export default Home
