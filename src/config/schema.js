// ☟, ☞, ☛, ✹, ※, ⁂, ☯
// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  descendants: [{
    name: 'projects/',
    descendants: [{
      name: 'code/',
      descendants: [{
        name: 'life',
        link: {
          type: 'view',
          url: '/projects/code/life'
        }
      }, {
        name: 'concat',
        link: {
          type: 'view',
          url: '/projects/code/concat'
        }
      }]
    }, {
      name: 'writing/',
      descendants: [{
        name: 'stories/',
        descendants: [{
          name: 'coldcuts',
          link: {
            type: 'view',
            url: '/projects/writing/stories/coldcuts'
          }
        }, {
          name: 'pig',
          link: {
            type: 'view',
            url: '/projects/writing/stories/pig'
          }
        }]
      }, {
        name: 'poems/',
        descendants: [{
          name: 'beached',
          link: {
            type: 'view',
            url: '/projects/writing/poems/beached'
          }
        }]
      }]
    }, {
      name: 'art',
      link: {
        type: 'view',
        url: '/projects/art'
      }
    }]
  }, {
    name: 'about/',
    descendants: [{
      name: 'me',
      link: {
        type: 'view',
        url: '/about/me'
      }
    }, {
      name: 'quotes',
      link: {
        type: 'view',
        url: '/about/quotes'
      }
    }, {
      name: 'contact/',
      descendants: [{
        name: 'email',
        link: {
          type: 'anchor',
          url: 'mailto:mail@emmanuelprice.com'
        }
      }, {
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