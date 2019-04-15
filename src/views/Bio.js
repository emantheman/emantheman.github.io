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
          <strong>Emmanuel Z. Price</strong>, {this.getAge()}, fanatical polyglottic<sup>*</sup> programmer compensating presently for (his own words) “lately-blooming, code-wise.” It was nineteen years before he even typed the words “Hello, world!” to give you a picture. But what started out as mere hobby quickly metastasized into full-blown obsession. Now, just a few years later, he builds websites for friends’ friends and says meaningless things like “This soggy code could use some refactoring” and wakes up in cold-sweats with problems’ solutions<sup>&dagger;</sup>. There are other things in his life too, he assures you; he meditates daily and reads large cumbersome books and exercises occasionally. But in the gaps between obligations and activities you’ll likely find him bathed in the soft-blue of his computer’s screen solving puzzles of his own design. . .
        </p>
        <h5><sup>*</sup> In descending proficiency: JavaScript, HTML/CSS, Ruby, Scheme, Python, Java</h5>
        <h5><sup>&dagger;</sup> North American hacker argot for this phenomenon is <em>code-sweats</em>. I.e., code-related perspiration.</h5>
      </div>
    )
  }
} 