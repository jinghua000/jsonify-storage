'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

const store = createJSONStore(
/* istanbul ignore next */
typeof localStorage === 'undefined' ? window.localStorage : localStorage);

const store$1 = createJSONStore(
/* istanbul ignore next */
typeof sessionStorage === 'undefined' ? window.sessionStorage : sessionStorage);

exports.local = store;
exports.session = store$1;
