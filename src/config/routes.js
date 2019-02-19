import Home from '../views/Home'
import Info from '../views/Info'

const routes = [{
  view: Info,
  path: '/info',
  linkText: 'info'
}, {
  view: Home,
  path: '/',
  linkText: 'home'
}]

export default routes