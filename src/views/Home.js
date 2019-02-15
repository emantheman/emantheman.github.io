import React from 'react'
import AtvImg from '../components/AtvImg'

// 'http://kloc.pm/images/back.png',
// 'http://kloc.pm/images/front.png',

const Home = () => (
  <div>
    <AtvImg
      layers={[
        's3://naturalbornchiller/redtree.png',
        'https://s3.us-east-2.amazonaws.com/naturalbornchiller/ancient_being.png'
      ]}
      staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
      isStatic={false}
      className={'thisIsOptional'}
      style={{ margin: '0 auto', width: 320, height: 190 }}
    />
  </div>
)

export default Home
