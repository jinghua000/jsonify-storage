import { createJSONStore } from './core'

/**
 * @public
 * Wrapper of `localStorage`.
 */
const local = createJSONStore(
  /* istanbul ignore next */
  typeof localStorage === 'undefined' ? window.localStorage : localStorage
)

export default local