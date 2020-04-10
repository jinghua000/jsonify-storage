import { createJSONStore } from './core'

const store = createJSONStore(
  /* istanbul ignore next */
  typeof localStorage === 'undefined' ? window.localStorage : localStorage
)

export const set = store.set
export const get = store.get
export const remove = store.remove
export const clear = store.clear
export const key = store.key

export default store