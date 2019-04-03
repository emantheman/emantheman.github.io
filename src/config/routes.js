import Home from '../views/Home'
import Me from '../views/Me'
import CGOL from '../views/CGOL'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/me',
  view: Me,
}, {
  path: '/projects/life',
  view: CGOL
}]

export default routes