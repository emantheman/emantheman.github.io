// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  children: [{
    name: 'code/',
    children: [{
        name: 'games/',
        children: [{
          name: 'life',
          link: {
            type: 'view',
            url: '/code/games/life',
            newTab: true
          }
        }, {
          name: 'tictactoe',
          link: {
            type: 'view',
            url: '/code/games/tictactoe',
            newTab: true
          }
        }]
      }, {
        name: 'components/',
        children: [{
          name: 'rotator',
          link: {
            type: 'view',
            url: '/code/components/rotator',
            newTab: true
          }
        }, {
          name: 'twocube',
          link: {
            type: 'view',
            url: '/code/components/twocube',
            newTab: true
          }
        }]
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