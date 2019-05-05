import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import FileTree from './components/filetree/FileTree'

import routes from './config/routes'
import branches from './config/schema'

import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      expanded: false,
      stowed: false
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
   * Locks menu in place and allows menu to slide neatly out of view, respectively.
   */
  menu = {
    stow: () => this.setState({ stowed: true, expanded: false }),
    unstow: () => this.setState({ stowed: false })
  }

  render() {
    const { expanded, stowed } = this.state
    const { history } = this.props

    // Instantiate routes
    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={() => <View menu={ this.menu }/>}/>
    })

    return (
      <div
        className="App"
        style={{ width: '100vw', height: '100vh' }}>
        {/* LHS Menu (click to expand) */}
        <div
          className={"left-column " + (stowed ? 'stowed ' : '') + (expanded ? 'open' : '')}
          onClick={ !expanded ? this.openMenu : undefined }>
          <FileTree
            branches={ branches }
            path={ history.location.pathname }
            toggleMenu={ this.toggleMenu }
            menuOpen={ expanded }/>
        </div>
        {/* Render routes */}
        <main>
          { Routes }
        </main>
      </div>
    )
  }
}

export default withRouter(App)
