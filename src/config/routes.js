import Home from '../views/Home'
import Me from '../views/Me'
import CGOL from '../views/CGOL'
import Quotes from '../views/Quotes'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/about/me',
  view: Me,
}, {
  path: '/projects/life',
  view: CGOL
}, {
  path: '/about/quotes',
  view: Quotes
}]

export default routes