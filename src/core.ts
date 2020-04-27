import { safeParse } from './utils'

/**
 * Wrapper of the native `Storage`.
 * 
 * @public
 */
export interface JSONStore {
  /**
   * Set a key-val to `Storage`, but jsonify the value.
   * 
   * @example
   * 
   * ```ts
   * local.set('foo', { a: 123 })
   * local.get('foo') // => { a: 123 }
   * ```
   */
  set: (key: string, payload: any) => void,
  /**
   * Get the supplied key corresponding value from the `Storage`, and JSON parse it.
   * 
   * If supplied key is not exist or can't parsed with JSON will return null.
   * 
   * @example
   * 
   * ```ts
   * local.set('foo', { a: 123 })
   * local.get('foo') // => { a: 123 }
   * 
   * localStorage.setItem('bar', '你好')
   * local.get('bar') // => null
   * local.get('baz') // => null
   * ```
   */
  get: (key: string) => any,
  /**
   * Same as `Storage.remove`.
   * 
   * @example
   * 
   * ```ts
   * local.set('foo', 123)
   * local.remove('foo')
   * local.get('foo') // => null
   * ```
   */
  remove: (key: string) => void,
  /**
   * Same as `Storage.clear`
   * 
   * @example
   * 
   * ```ts
   * local.set('foo', 123)
   * local.set('bar', 234)
   * local.clear()
   * local.length // => 0
   * ```
   */
  clear: () => void,
  /**
   * Same as `Storage.key`
   * 
   * @example
   * 
   * ```ts
   * local.set('foo', 123)
   * local.set('bar', 234)
   * local.key(0) // => 'foo'
   * local.key(1) // => 'bar'
   * ```
   */
  key: (index: number) => string,
  /**
   * Same as `Storage.length`
   * 
   * @example
   * 
   * ```ts
   * local.length // => 0
   * local.set('foo', 123)
   * local.length // => 1
   * ```
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