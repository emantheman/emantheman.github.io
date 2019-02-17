import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import FlipCard from './components/FlipCard'
import routes from './config/routes'
import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentView: this.props.history.location.pathname,
       cardFlipped: false,
       showFlipCard: true
    }
  }

  flipOverCard = yOrN => this.setState({ cardFlipped: yOrN })
  
  render() {
    const {
      showFlipCard,
      cardFlipped
    } = this.state
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
        { showFlipCard && <div>
          <FlipCard
            card={{
              front: {
                layers: [
                  'http://kloc.pm/images/back.png',
                  'http://kloc.pm/images/front.png',
                ],
                staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg"
              },
              back: {
                layers: [
                  'http://kloc.pm/images/back.png',
                  'http://kloc.pm/images/front.png',
                ],
                staticFallback: "http://kloc.pm/images/kloc-icon-flattened.jpg"
              }
            }}
            width={ 320 }
            height={ 190 }
            flipped={ cardFlipped }/>
        </div> }
        <main>
          { Routes }
        </main>
        <Footer currentPath={ history.location.pathname }/>
      </div>
    )
  }
}

export default withRouter(App)
