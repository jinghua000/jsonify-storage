# jsonify-storage

[![Build Status](https://travis-ci.org/jinghua000/jsonify-storage.svg?branch=master)](https://travis-ci.org/jinghua000/jsonify-storage)
[![npm module](https://badge.fury.io/js/jsonify-storage.svg)](https://www.npmjs.com/package/jsonify-storage)
[![Coverage Status](https://coveralls.io/repos/github/jinghua000/jsonify-storage/badge.svg?branch=master)](https://coveralls.io/github/jinghua000/jsonify-storage?branch=master)
[![Dependency Status](https://david-dm.org/jinghua000/jsonify-storage.svg)](https://david-dm.org/jinghua000/jsonify-storage)

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
```

Payload will be json-stringified before save.

Raw data seems like this:

```js
localStorage.getItem('foo') // => '{"a":123}'
```

If you try to get something can't parsed by JSON or not existed will return `null`

```js
localStorage.setItem('bar', '我我我')
local.get('bar') // => null
local.get('baz') // => null
```

Others apis sames as native [`Storage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage), list below.

> - setItem -> set
> - getItem -> get
> - removeItem -> remove
> - clear -> clear
> - key -> key
> - length -> length

More details see [API documentation](https://github.com/jinghua000/jsonify-storage/blob/master/api-docs/jsonify-storage.jsonstore.md).