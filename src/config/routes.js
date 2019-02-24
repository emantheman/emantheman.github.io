import Home from '../views/Home'
import Info from '../views/Info'
import Concatenate from '../views/Concatenate'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/info',
  view: Info,
}, {
  path: '/code/projects/concatenate',
  view: Concatenate
}]

export default routes