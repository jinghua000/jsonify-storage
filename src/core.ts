import { safeParse } from './utils'

export interface JSONStore {
  set: (key: string, payload: any) => void,
  get: (key: string) => any,
  remove: (key: string) => void,
  clear: () => void,
  key: (index: number) => string,
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