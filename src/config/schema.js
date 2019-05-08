// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  children: [{
      name: 'code/',
      children: [{
        name: 'life',
        link: {
          type: 'view',
          url: '/code/life',
          newTab: true
        }
      }, {
        name: 'tictactoe',
        link: {
          type: 'view',
          url: '/code/tictactoe',
          newTab: true
        }
      }, {
        name: 'concat',
        link: {
          type: 'view',
          url: '/code/concat'
        }
      }]
    }, {
      name: 'other/',
      children: [{
        name: 'art',
        link: {
          type: 'view',
          url: '/other/art'
        }
      }, {
        name: 'quotes',
        link: {
          type: 'view',
          url: '/other/quotes'
        }
      }]
    }, {
    name: 'info/',
    children: [{
      name: 'bio',
      link: {
        type: 'view',
        url: '/info/bio'
      }
    }, {
      name: 'github',
      link: {
        type: 'anchor',
        url: 'https://github.com/emantheman'
      }
    }, {
      name: 'resume',
      link: {
        type: 'view',
        url: '/info/resume.pdf',
        newTab: true
      }
    }]
  }]
}

// writing
// {
//   name: 'writing/',
//   children: [{
//     name: 'cc.pdf',
//     link: {
//       type: 'view',
//       url: '/other/writing/cold_cuts.pdf',
//       newTab: true
//     }
//   }, {
//     name: 'beachd.pdf',
//     link: {
//       type: 'view',
//       url: '/other/writing/beached.pdf',
//       newTab: true
//     }
//   }]
// }, 

export default branches