import React from 'react'
import Gallery from '../components/Gallery'

import '../styles/Art.scss'

// make google photos embedable at: https://ctrlq.org/google/photos/?_ga=2.128867980.1276491792.1554747504-750883585.1554747502
const IMAGES = [{
  src: 'https://lh3.googleusercontent.com/boJuDEZIizbUCSnLwPlD-oMV2wfk9Wh9chQiCabWOda0N_x2ZbRL9866Y1_XUmiOtgfoSCnn8mHDMVwD9qXwWQaVtemP_AmSkWirmvYiABKbShIxkvqos21FGjRoZh03Eyiu-oFxkw=w2400',
  thumbnail: 'https://lh3.googleusercontent.com/boJuDEZIizbUCSnLwPlD-oMV2wfk9Wh9chQiCabWOda0N_x2ZbRL9866Y1_XUmiOtgfoSCnn8mHDMVwD9qXwWQaVtemP_AmSkWirmvYiABKbShIxkvqos21FGjRoZh03Eyiu-oFxkw=w2400',
  caption: 'Wanderer',
  orientation: 'square'
}, {
  src: 'https://lh3.googleusercontent.com/NIwrNyz5soiMxo3r2U6eftM2vhNMZNIRpEzL-cF_MPX37mI_ZSn2WOvpZX_Cv1TAGnxgPK7PBWWrnX2I1UOOlr3Fbp_P5XNLI1c4NGQaE1YES9uqsdygXeXcGxz6M0lrQi-W6xzNwA=w2400',
  thumbnail: 'https://lh3.googleusercontent.com/NIwrNyz5soiMxo3r2U6eftM2vhNMZNIRpEzL-cF_MPX37mI_ZSn2WOvpZX_Cv1TAGnxgPK7PBWWrnX2I1UOOlr3Fbp_P5XNLI1c4NGQaE1YES9uqsdygXeXcGxz6M0lrQi-W6xzNwA=w2400',
  caption: 'Woodland cretin',
  orientation: 'square'
}, {
  src: 'https://lh3.googleusercontent.com/dxdor_GpNGqNnHEJZP62L2yAtnUicsNZozKZPsN4ia2jcqrnsUa82UNySplXWHCND80V3QNdzwYYbQJi6CXmkQYTgAgzzUFMLdmg6mvlYAhUn9BpCBvqjWegzgi1i2-s67BSzUcpZA=w2400',
  thumbnail: 'https://lh3.googleusercontent.com/dxdor_GpNGqNnHEJZP62L2yAtnUicsNZozKZPsN4ia2jcqrnsUa82UNySplXWHCND80V3QNdzwYYbQJi6CXmkQYTgAgzzUFMLdmg6mvlYAhUn9BpCBvqjWegzgi1i2-s67BSzUcpZA=w2400',
  caption: 'Cherry tree',
  orientation: 'square'
}]

const Art = () => (
  <div className="Art">
    <h3>My Artwork</h3>
    <Gallery images={IMAGES}/>
  </div>
)

export default Art