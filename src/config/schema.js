// ☟, ☞, ☛, ✹, ※, ⁂, ☯
// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  descendants: [{
    name: 'code/',
    descendants: [{
      name: 'projects/',
      descendants: [{
        name: 'cogl',
        link: {
          type: 'view',
          url: '/code/projects/conwaysgameoflife'
        }
      }]
    }]
  }, {
    name: 'about/',
    descendants: [{
      name: 'me',
      link: {
        type: 'view',
        url: '/me'
      }
    }, {
      name: 'inspiration',
      link: {
        type: 'view',
        url: '/info/inspiration'
      }
    }, {
      name: 'contact/',
      descendants: [{
        name: 'github',
        link: {
          type: 'anchor',
          url: 'https://github.com/naturalbornchiller/'
        }
      }, {
        name: 'linkedin',
        link: {
          type: 'anchor',
          url: 'https://www.linkedin.com/in/emmanuelprice/'
        }
      }, {
        name: 'codewars',
        link: {
          type: 'anchor',
          url: 'https://www.codewars.com/users/naturalbornchiller/'
        }
      }]
    }]
  }]
}

export default branches