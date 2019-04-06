import Home from '../views/Home'
import Me from '../views/Me'
import CGOL from '../views/CGOL'
import Quotes from '../views/Quotes'
import Concatenate from '../views/Concatenate'
import ColdCuts from '../views/ColdCuts'
import Beached from '../views/Beached'

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
}, {
  path: '/projects/writing/stories/cold_cuts.pdf',
  view: ColdCuts
}, {
  path: '/projects/writing/poems/beached.pdf',
  view: Beached
}]

export default routes