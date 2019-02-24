import Home from '../views/Home'
import About from '../views/About'
import Concatenate from '../views/Concatenate'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/about',
  view: About,
}, {
  path: '/code/projects/concatenate',
  view: Concatenate
}]

export default routes