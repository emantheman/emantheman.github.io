import Home from '../views/Home'
import Me from '../views/Me'
import CGOL from '../views/CGOL'
import Quotes from '../views/Quotes'
import Concatenate from '../views/Concatenate'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/about/me',
  view: Me,
}, {
  path: '/projects/code/life',
  view: CGOL
}, {
  path: '/about/quotes',
  view: Quotes
}, {
  path: '/projects/code/concat',
  view: Concatenate
}]

export default routes