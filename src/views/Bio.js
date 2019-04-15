import React, { Component } from 'react'

import '../styles/Bio.scss'

export default class Bio extends Component {
  /**
   * Returns my age
   */
  getAge = () => new Date().getFullYear() - 1996
  render() {
    return (
      <div className="Bio">
        <p>
          <strong>Emmanuel Z. Price</strong>, {this.getAge()}, fanatical polyglottic programmer compensating for (his own words) “lately-blooming, code-wise.” It was nineteen years before he ever typed the words “Hello, world!” to give you a picture. But what started out as mere hobby quickly metastasized into full-blown obsession. Now, just a few years later, he builds websites for friends’ friends and says meaningless things like “You could dry up this code by refactoring with a hash-map” and wakes up in code-sweats with problems’ solutions. There are other things in his life too, he assures you: he meditates daily and reads large cumbersome books and exercises occasionally, etc. But in the gaps between obligations and activities you’ll often find him in some void, typing madly, features bathed in the soft-blue of his computer’s screen…
        </p>
      </div>
    )
  }
} 