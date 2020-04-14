import { createJSONStore } from './core'

export default createJSONStore(
  /* istanbul ignore next */
  typeof sessionStorage === 'undefined' ? window.sessionStorage : sessionStorage
)