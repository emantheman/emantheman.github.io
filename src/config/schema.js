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
        }, 
          {
          name: 'dicube',
          link: {
            type: 'view',
            url: '/code/components/dicube',
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
        type: 'anchor',
        url: `${process.env.PUBLIC_URL}/documents/EPResume.pdf`
      }
    }]
  }]
}

export default branches