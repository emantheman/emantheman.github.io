const branches = {
  name: 'home',
  link: {
    type: 'link',
    url: '/'
  },
  descendants: [{
    name: 'code',
    descendants: [{
      name: 'projects',
      link: {
        type: 'link',
        url: '/projects'
      },
      descendants: [{
        name: 'Concatenate'
      }, {
        name: 'Kigo'
      }, {
        name: 'Life'
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
        url: '/inspiration'
      }
    }]
  }]
}

export default branches