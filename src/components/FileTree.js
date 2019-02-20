import React, { Component } from 'react'
import '../styles/FileTree.scss'

export default class FileTree extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      treeHidden: true
    }
  }
  
  toggleTreeView = () => this.setState(prevState => this.setState({ treeHidden: !prevState.treeHidden }))

  render() {
    const {
      treeHidden
    } = this.state

    return (
      <div className="FileTree">
        {/* Hides and shows tree on click */}
        <div className="toggle-container" onClick={this.toggleTreeView}>
          <span className={'toggle ' + (treeHidden ? 'collapsed' : '')}/>
        </div>
        {/* Tree */}
        <div className="branches">
          <ul>
            <li>Fruit
              <ul>
                <li>Red
                  <ul>
                    <li>Cherry</li>
                    <li>Strawberry</li>
                  </ul>
                </li>
                <li>Yellow
                  <ul>
                    <li>Banana</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Meat
              <ul>
                <li>Beef</li>
                <li>Pork</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
