<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [jsonify-storage](./jsonify-storage.md) &gt; [JSONStore](./jsonify-storage.jsonstore.md) &gt; [get](./jsonify-storage.jsonstore.get.md)

## JSONStore.get property

Get the supplied key corresponding value from the `Storage`<!-- -->, and JSON parse it.

If supplied key is not exist or can't parsed with JSON will return null.

<b>Signature:</b>

```typescript
get: (key: string) => any;
```

## Example


```ts
local.set('foo', { a: 123 })
local.get('foo') // => { a: 123 }

localStorage.setItem('bar', '你好')
local.get('bar') // => null
local.get('baz') // => null

```

