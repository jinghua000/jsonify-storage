import { createJSONStore } from './core'

export default createJSONStore(
  typeof sessionStorage === 'undefined' ? window.sessionStorage : sessionStorage
)