import { createJSONStore } from './core'

export default createJSONStore(
  /* istanbul ignore next */
  typeof localStorage === 'undefined' ? window.localStorage : localStorage
)