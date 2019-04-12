import Home from '../views/Home'
import Bio from '../views/Bio'
import CGOL from '../views/CGOL'
import Quotes from '../views/Quotes'
import Concatenate from '../views/Concatenate'
import ColdCuts from '../views/ColdCuts'
import Beached from '../views/Beached'
import Art from '../views/Art'
import Resume from '../views/Resume'
import Contact from '../views/Contact'

const routes = [{
  path: '/',
  view: Home
}, {
  path: '/info/bio',
  view: Bio,
}, {
  path: '/code/life',
  view: CGOL
}, {
  path: '/other/quotes',
  view: Quotes
}, {
  path: '/code/concat',
  view: Concatenate
}, {
  path: '/other/writing/cold_cuts.pdf',
  view: ColdCuts
}, {
  path: '/other/writing/beached.pdf',
  view: Beached
}, {
  path: '/other/art',
  view: Art
}, {
  path: '/info/resume.pdf',
  view: Resume
}, {
  path: '/info/contact',
  view: Contact
}]

export default routes