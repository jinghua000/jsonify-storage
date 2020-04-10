import { safeParse } from './utils'

export interface JSONStore {
  /**
   * set a key to localStorage
   */
  set: (key: string, payload: any) => void,
  get: (key: string) => any,
  remove: (key: string) => void,
  clear: () => void,
  /**
   * Same as `Storage.key`
   * 
   * @example
   * 
   * local.set('foo', 123)
   * local.set('bar', 234)
   * local.key(0) // => 'foo'
   * local.key(1) // => 'bar'
   */
  key: (index: number) => string,
  /**
   * Same as `Storage.length`
   * 
   * @example
   * 
   * local.length // => 0
   * local.set('foo', 123)
   * local.length // => 1
   */
  readonly length: number,
}

export function createJSONStore (store: Storage): JSONStore {
  const nativeStore = store

  return {
    set: (key, payload) => nativeStore.setItem(key, JSON.stringify(payload)),
    get: key => safeParse(nativeStore.getItem(key)),
    remove: key => nativeStore.removeItem(key),
    clear: () => nativeStore.clear(),
    key: index => nativeStore.key(index),
    get length () {
      return nativeStore.length
    },
  }
}