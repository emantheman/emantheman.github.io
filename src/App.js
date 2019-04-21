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
      shown: false,
      shownTimer: setTimeout(() => this.setState({ shown: false }), 5000),
      locked: false,
      stowed: true
    }
  }

  /**
   * Reverses menu's openness.
   * 
   * @param {Boolean} isOpen - true if the menu is open
   */
  toggleMenu = isOpen => this.setState({ expanded: !isOpen }, () => this.showMenu())

  /**
   * Opens menu.
   */
  openMenu = () => this.setState({ expanded: true })

  /**
   * Shows menu for 5 seconds on mousemovement.
   */
  showMenu = () => {
    const { expanded, shownTimer } = this.state

    // if menu is open, do nothing
    if (expanded) return

    // clear timer
    clearTimeout(shownTimer)
    this.setState({
      shown: true,
      shownTimer: setTimeout(() => this.setState({ shown: false }), 5000)
    })
  }

  /**
   * Locks menu in place and allows menu to slide neatly out of view, respectively.
   */
  menu = {
    lock: () => this.setState({ locked: true }),
    unlock: () => this.setState({
      shown: false,
      locked: false,
      shownTimer: setTimeout(() => this.setState({ shown: false }), 5000) 
    }),
    unstow: () => this.setState({
      stowed: false,
      shown: true,
      shownTimer: setTimeout(() => this.setState({ shown: false }), 5000) 
    })
  }

  render() {
    const { expanded, shown, locked, stowed } = this.state
    const { history } = this.props

    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={() => <View menu={ this.menu }/>}/>
    })

    return (
      <div
        className="App"
        style={{ width: '100vw', height: '100vh' }}
        onMouseMove={ stowed ? undefined : this.showMenu }>
        <div
          className={"left-column " + (locked || shown ? 'shown ' : '') + (expanded ? 'open' : '')}
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
