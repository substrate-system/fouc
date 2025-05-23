import { fouc } from '../src/index.js'

console.log('document state', document.readyState)

fouc(() => {
    console.log('fouc can take a callback')
})

await fouc()

console.log('done waiting for fouc', document.readyState)
