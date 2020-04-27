const Store = require('dom-storage')

declare global {
  namespace NodeJS {
    interface Global {
      localStorage: any
      sessionStorage: any
    }
  }
}

global.localStorage = new Store(null, { strict: true })
global.sessionStorage = new Store(null, { strict: true })

export default {}