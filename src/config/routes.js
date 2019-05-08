import Art from '../views/Art'
import Bio from '../views/Bio'
import CGOL from '../views/CGOL'
import Concatenate from '../views/Concatenate'
import Home from '../views/Home'
import Quotes from '../views/Quotes'
import Resume from '../views/Resume'
import TicTacToe from '../views/TicTacToe'

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
  path: '/other/art',
  view: Art,
  name: 'Art'
}, {
  path: '/info/resume.pdf',
  view: Resume,
  name: 'Resume'
}]

export default routes