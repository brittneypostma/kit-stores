import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const persistStore = (key, initial) => {
  if (browser.localStorage) {
    const persist = localStorage.getItem(key)
    const data = persist ? JSON.parse(persist) : initial
    const store = writable(data, () => {
      const unsubscribe = store.subscribe(value => {
        localStorage.setItem(key, JSON.stringify(value))
      })
      return unsubscribe
    })
    return store
  }
}
