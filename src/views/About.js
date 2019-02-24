import React, { Component } from 'react'
import AtvImg from '../components/AtvImg'
import '../styles/About.scss'

class About extends Component {
  render() {
    return (
      <div className="About">
        <AtvImg
          layers={[
            'http://kloc.pm/images/back.png',
            'http://kloc.pm/images/front.png',
          ]}
          staticFallback={ 'http://kloc.pm/images/kloc-icon-flattened.jpg' }
          isStatic={ false }
          style={{ width: 480, height: 285, float: 'left', marginRight: '11px' }}/>
        <h1>
          Emmanuel Price
        </h1>
        <hr width="260" align="left"/>
        <p>
          My two main focuses as an adult have been towards programming and meditation. While the two things seem unrelated at first, I see them as equal opposites. One (programming) requires a detective's eye for the abberant. The other (meditation) is concerned with erasing distinction.<br/><br/>
          It is this paradox which most informs my work: Programming forces me to solve problems on an atomic scale; meditation allows me to return easily and frequently to the big picture (a feature of this being that many "problems" need not be solved, simply removed).
        </p>
        <p>
          
        </p>
        <h6>
          Interests: deceptive simplicity, unequivocal interactions, mountains
        </h6>
      </div>
    )
  }
}

export default About