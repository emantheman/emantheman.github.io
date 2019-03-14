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
      expanded: false
    }
  }

  toggleMenu = isOpen => this.setState({ expanded: !isOpen })
  openMenu = () => this.setState({ expanded: true })

  render() {
    const { expanded } = this.state
    const { history } = this.props

    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={ () => <View/> }/>
    })

    return (
      <div className="App">
        <div
          className={ "left-column " + (expanded ? 'open' : '')}
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
