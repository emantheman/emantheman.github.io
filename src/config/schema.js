const branches = {
  name: 'home',
  link: {
    type: 'link',
    url: '/'
  },
  descendants: [{
    name: 'code',
    link: {
      type: 'link',
      url: '/code'
    },
    descendants: [{
      name: 'projects',
      link: {
        type: 'link',
        url: '/code/projects'
      },
      descendants: [{
        name: 'concat',
        link: {
          type: 'link',
          url: '/code/projects/concatenate'
        }
      }, {
        name: 'kigo',
        link: {
          type: 'link',
          url: '/code/projects/kigo'
        }
      }, {
        name: 'cogl',
        link: {
          type: 'link',
          url: '/code/projects/conwaysgameoflife'
        }
      }]
    }]
  }, {
    name: 'info',
    link: {
      type: 'link',
      url: '/info'
    },
    descendants: [{
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
        type: 'link',
        url: '/info/inspiration'
      }
    }]
  }]
}

export default branches