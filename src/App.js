import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import routes from './config/routes'
import './styles/App.css'

class App extends Component {
  render() {
    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={ () => <View/> }/>
    })

    return (
      <div className="App">
        <main>
          { Routes }
        </main>
        <Footer currentPath={ this.props.history.location.pathname }/>
      </div>
    )
  }
}

export default withRouter(App)
