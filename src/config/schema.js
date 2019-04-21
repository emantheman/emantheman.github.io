// for terminal-like file-tree branches see https://en.wikipedia.org/wiki/Box-drawing_character
const branches = {
  name: 'emmanuel_price/',
  descendants: [{
      name: 'code/',
      descendants: [{
        name: 'life',
        link: {
          type: 'view',
          url: '/code/life'
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
      descendants: [{
        name: 'writing/',
        descendants: [{
          name: 'cc.pdf',
          link: {
            type: 'view',
            url: '/other/writing/cold_cuts.pdf'
          }
        }, {
          name: 'beachd.pdf',
          link: {
            type: 'view',
            url: '/other/writing/beached.pdf'
          }
        }]
      }, {
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
    descendants: [{
      name: 'bio',
      link: {
        type: 'view',
        url: '/info/bio'
      }
    }, {
      name: 'contact',
      link: {
        type: 'view',
        url: '/info/contact'
      }
    }, {
      name: 'github',
      link: {
        type: 'anchor',
        url: 'https://github.com/naturalbornchiller'
      }
    }, {
      name: 'resume.pdf',
      link: {
        type: 'view',
        url: '/info/resume.pdf'
      }
    }]
  }]
}

export default branches

/**
 * emmanuel/
 * |
 *  - code/ 
 * |
 *  - other/
 * 
 */