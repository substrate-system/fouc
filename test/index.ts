import { test } from '@substrate-system/tapzero'
import { fouc } from '../src/index.js'

test('fouc', async t => {
    await fouc()
    t.ok(document.readyState !== 'loading', 'Document should be ready')
})
