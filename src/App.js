import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import routes from './config/routes'
import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {}
  }

  flipOverCard = yOrN => this.setState({ cardFlipped: yOrN })
  
  render() {
    const {
      history
    } = this.props

    const Routes = routes.map((route, index) => {
      const { path, view: View } = route
      return <Route key={ index }
                    exact path={ path }
                    render={ () => <View flipOverCard={ this.flipOverCard }/> }/>
    })

    return (
      <div className="App">
        <main>
          { Routes }
        </main>
        <Footer currentPath={ history.location.pathname }/>
      </div>
    )
  }
}

export default withRouter(App)
