(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.jsonifyStorage = {}));
}(this, (function (exports) { 'use strict';

  const safeParse = (payload) => {
      try {
          return JSON.parse(payload);
      }
      catch (err) {
          return null;
      }
  };

  function createJSONStore(store) {
      const nativeStore = store;
      return {
          set: (key, payload) => nativeStore.setItem(key, JSON.stringify(payload)),
          get: key => safeParse(nativeStore.getItem(key)),
          remove: key => nativeStore.removeItem(key),
          clear: () => nativeStore.clear(),
          key: index => nativeStore.key(index),
          get length() {
              return nativeStore.length;
          },
      };
  }

  /**
   * @public
   * Wrapper of `localStorage`.
   */
  const local = createJSONStore(
  /* istanbul ignore next */
  typeof localStorage === 'undefined' ? window.localStorage : localStorage);

  /**
   * @public
   * Wrapper of `sessionStorage`.
   */
  const session = createJSONStore(
  /* istanbul ignore next */
  typeof sessionStorage === 'undefined' ? window.sessionStorage : sessionStorage);

  exports.local = local;
  exports.session = session;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
