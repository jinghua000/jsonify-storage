import { eq, equals } from './shared'
import { local, session } from '../src'

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

  it('localStorage\'s length should works', () => {

    eq(local.length, 0)
    local.set('foo', 123)
    eq(local.length, 1)
    localStorage.setItem('bar', '234')
    eq(local.length, 2)
    local.clear()
    eq(local.length, 0)

  })

  it('localStorage\'s key should works', () => {

    local.set('foo', 123)
    local.set('bar', 234)
    localStorage.setItem('baz', '345')
    eq(local.key(0), 'foo')
    eq(local.key(1), 'bar')
    eq(local.key(2), 'baz')

    local.remove('foo')
    eq(local.key(0), 'bar')
    eq(local.key(1), 'baz')

  })

  it('localStorage\'s remove should works', () => {

    local.set('foo', 123)
    localStorage.setItem('bar', '234')

    eq(local.remove('foo'), void 0)
    eq(local.get('foo'), null)

    localStorage.removeItem('bar')
    eq(local.get('bar'), null)

  })

  it('of course clear should works', () => {

    local.set('foo', 123)
    local.set('bar', 234)

    eq(localStorage.length, 2)
    local.clear()
    eq(localStorage.length, 0)
    eq(local.length, 0)

  })

  it('can works without context', () => {

    const { set, get, remove, clear, key } = local

    set('foo', 123)
    set('bar', 234)

    eq(get('foo'), 123)
    eq(local.length, 2)
    eq(key(0), 'foo')
    
    remove('foo')

    eq(key(0), 'bar')
    eq(local.length, 1)

    clear()

    eq(local.length, 0)

  })

})
