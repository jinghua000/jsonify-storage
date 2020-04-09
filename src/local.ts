import { createJSONStore } from './core'

export default createJSONStore(
  typeof localStorage === 'undefined' ? window.localStorage : localStorage
)