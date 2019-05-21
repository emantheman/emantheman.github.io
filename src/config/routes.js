import Art from '../views/Art'
import Bio from '../views/Bio'
import CGOL from '../views/CGOL'
import Concatenate from '../views/Concatenate'
import Cube from '../views/Cube.js'
import Home from '../views/Home'
import Quotes from '../views/Quotes'
import Rotator from '../views/Rotator'
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
  path: '/code/games/life',
  view: CGOL,
  name: 'Life'
}, {
  path: '/code/games/tictactoe',
  view: TicTacToe,
  name: 'TicTacToe'
}, {
  path: '/code/components/rotator',
  view: Rotator,
  name: 'Rotator'
}, {
  path: '/code/components/dicube',
  view: Cube,
  name: 'Cube'
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
}]

export default routes