# jsonify-storage

## Introduction

There is a unfriendly case when we use the the native `localStorage`, such as 

```js
localStorage.setItem('foo', { a: 123 })
localStorage.getItem('foo') // => [object Object]

localStorage.setItem('bar', 123)
localStorage.getItem('bar') // => '123'
```

So, jsonify it!

## Install

> ⚠Notice: Can only works in browser environment, other scene need define global variable to mock `Storage`.

```js
// In node you have to write like this.

global.localStorage = yourLocalStorage
global.sessionStorage = yourSessionStorage
```

Node:

```bash
npm i -D jsonify-storage
```

Browser:

```html
<script src="./dist/jsonify-storage.umd.min.js"></script>
```

## Usage

Import in Node:

```js
// es mode
import { local, session } from 'jsonify-storage'
// or cjs mode
const { local, session } = require('jsonify-storage')
```

In Browser:

```js
const { local, session } = jsonifyStorage
```

- `local` means `localStorage`
- `session` means `sessionStorage`

Then you can use it like this:

```js
local.set('foo', { a: 123 })
local.get('foo') // => { a: 123 }
local.get('foo').a === 123 // => true, will retain the type.
local.remove('foo')
local.get('foo') // => null
localStorage.getItem('foo') // => null
```

Payload will be json-stringified before save.

Raw data seems like this:

```js
localStorage.getItem('foo') // => "{"a":123}"
```

If you get something can't parsed by JSON will return `null`

```js
localStorage.setItem('bar', '我我我')
local.get('bar') // => null
```

Others apis sames as native [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage), list below.

> - setItem -> set
> - getItem -> get
> - removeItem -> remove
> - clear -> clear
> - key -> key
> - length -> length
