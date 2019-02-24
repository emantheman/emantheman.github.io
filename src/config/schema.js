//☟, ☞, ☛, ✹, ※, ⁂, ☯
const branches = {
  name: '☞',
  descendants: [{
    name: 'code',
    descendants: [{
      name: 'projects',
      descendants: [{
        name: 'concat',
        link: {
          type: 'view',
          url: '/code/projects/concatenate'
        }
      }, {
        name: 'kigo',
        link: {
          type: 'view',
          url: '/code/projects/kigo'
        }
      }, {
        name: 'cogl',
        link: {
          type: 'view',
          url: '/code/projects/conwaysgameoflife'
        }
      }]
    }]
  }, {
    name: 'info',
    descendants: [{
      name: 'about',
      link: {
        type: 'view',
        url: '/about'
      }
    }, {
      name: 'contact',
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
    }, {
      name: 'inspiration',
      link: {
        type: 'view',
        url: '/info/inspiration'
      }
    }]
  }]
}

export default branches