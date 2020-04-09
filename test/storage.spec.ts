import { eq, equals } from './shared'
import local from '../src/local'
import session from '../src/session'

describe('test storage', () => {

  beforeEach(() => local.clear())
  
  it('import local and session jsonify-storage successfully', () => {

    eq(typeof local, 'object')
    eq(typeof session, 'object')
    // since that `sessionStorage` and `localStorage`'s apis are exactly same
    // so following test cases only test `localStorage`

  })

  it('can set and get with common string', () => {

    eq(local.set('foo', 'i am foo'), void 0)
    eq(local.get('foo'), 'i am foo')

  })

  it('should set or get values via jsonify', () => {

    local.set('foo', 1)
    eq(local.get('foo'), 1)

    local.set('foo', '我我我')
    eq(local.get('foo'), '我我我')

    local.set('foo', false)
    eq(local.get('foo'), false)

    local.set('foo', { a: 123, b: [{ c: '234' }] })
    equals(local.get('foo'), { a: 123, b: [{ c: '234' }] })

  })

  it('if get key is not exists will return null', () => {

    eq(local.get('foo'), null)

  })

  it('if get key cannot parse by JSON will return null, otherwise should works', () => {

    localStorage.setItem('foo', '我我我')
    eq(local.get('foo'), null)

    localStorage.setItem('bar', '{ "a": 123 }')
    equals(local.get('bar'), { a: 123 })

    localStorage.clear()

  })

})
