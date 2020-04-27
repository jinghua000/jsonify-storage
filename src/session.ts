import { createJSONStore } from './core'

/**
 * @public
 * Wrapper of `sessionStorage`.
 */
const session = createJSONStore(
  /* istanbul ignore next */
  typeof sessionStorage === 'undefined' ? window.sessionStorage : sessionStorage
) 

export default session