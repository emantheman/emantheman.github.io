import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import FileTree from './components/FileTree'
import routes from './config/routes'
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

    const branches = {
      name: 'Food',
      descendants: [{
        name: 'Fruit',
        descendants: [{
          name: 'Red',
          descendants: [{name: 'Apple'}, {name: 'Strawberry'}, {name: 'Raspberry'}]
        }, {
          name: 'Yellow',
          descendants: [{
            name: 'Banana'
          }, {
            name: 'Pineapple'
          }]
        }]
      }, {
        name: 'Meat',
        descendants: [{name: 'Beef'}, {name: 'Pork'}, {name: 'Chicken'}]
      }]
    }

    return (
      <div className="App">
        <FileTree branches={branches}/>
        <main>
          { Routes }
        </main>
        <Footer currentPath={ history.location.pathname }/>
      </div>
    )
  }
}

export default withRouter(App)
