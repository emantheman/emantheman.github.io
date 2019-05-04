import Home from '../views/Home'
import Bio from '../views/Bio'
import CGOL from '../views/CGOL'
import TicTacToe from '../views/TicTacToe'
import Quotes from '../views/Quotes'
import Concatenate from '../views/Concatenate'
import ColdCuts from '../views/ColdCuts'
import Beached from '../views/Beached'
import Art from '../views/Art'
import Resume from '../views/Resume'

const routes = [{
  path: '/',
  view: Home,
  name: 'Home'
}, {
  path: '/info/bio',
  view: Bio,
  name: 'Bio'
}, {
  path: '/code/life',
  view: CGOL,
  name: 'Life'
}, {
  path: '/code/tictactoe',
  view: TicTacToe,
  name: 'TicTacToe'
}, {
  path: '/other/quotes',
  view: Quotes,
  name: 'Quotes'
}, {
  path: '/code/concat',
  view: Concatenate,
  name: 'Concat'
}, {
  path: '/other/writing/cold_cuts.pdf',
  view: ColdCuts,
  name: 'ColdCuts'
}, {
  path: '/other/writing/beached.pdf',
  view: Beached,
  name: 'Beached'
}, {
  path: '/other/art',
  view: Art,
  name: 'Art'
}, {
  path: '/info/resume.pdf',
  view: Resume,
  name: 'Resume'
}]

export default routes