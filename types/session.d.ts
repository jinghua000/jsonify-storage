declare const store: import("./core").JSONStore;
export declare const set: (key: string, payload: any) => void;
export declare const get: (key: string) => any;
export declare const remove: (key: string) => void;
export declare const clear: () => void;
export declare const key: (index: number) => string;
export default store;
