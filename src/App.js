import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import FileTree from './components/filetree/FileTree'
import Path from './components/filetree/Path'

import routes from './config/routes'
import branches from './config/schema'

import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      expanded: false,
      shown: true,
      shownTimer: setTimeout(() => this.setState({shown: false}), 4000)
    }
  }

  /**
   * Reverses menu's openness.
   * 
   * @param {Boolean} isOpen - true if the menu is open
   */
  toggleMenu = isOpen => this.setState({ expanded: !isOpen })

  /**
   * Opens menu.
   */
  openMenu = () => this.setState({ expanded: true })

  /**
   * Shows menu for ten seconds on mousemovement.
   */
  showMenu = () => {
    const { expanded, shownTimer } = this.state

    // if menu is open, do nothing
    if (expanded) return

    // clear timer
    clearTimeout(shownTimer)
    this.setState({
      shown: true,
      shownTimer: setTimeout(() => this.setState({shown: false}), 4000)
    })
  }

  render() {
    const { expanded, shown } = this.state
    const { history } = this.props

    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={ () => <View/> }/>
    })

    return (
      <div
        className="App"
        style={{width: '100vw', height: '100vh'}}
        onMouseMove={this.showMenu}>
        <div
          className={ "left-column " + (shown ? 'shown ' : '') + (expanded ? 'open' : '')}
          onClick={ !expanded ? this.openMenu : undefined }>
          <FileTree
            branches={ branches }
            currentPath={ history.location.pathname }
            toggleMenu={ this.toggleMenu }
            menuOpen={ expanded }/>
        </div>
        <Path path={ history.location.pathname }/>
        <main>
          { Routes }
        </main>
      </div>
    )
  }
}

export default withRouter(App)
