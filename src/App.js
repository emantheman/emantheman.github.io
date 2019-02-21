import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import FileTree from './components/FileTree'
import routes from './config/routes'
import branches from './config/treeSchema'
import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }
  
  render() {
    const { history } = this.props

    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={ () => <View/> }/>
    })

    return (
      <div className="App">
        <FileTree
          branches={branches}
          currentPath={ history.location.pathname }/>
        <main>
          { Routes }
        </main>
      </div>
    )
  }
}

export default withRouter(App)
