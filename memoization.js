const memoization = (func) => {
  const cache = new Map()

  return (...params) => {
    const createKey = (arg) => JSON.stringify(arg).split('').sort().join()

    const key = createKey(params)

    if (cache.has(key)) return cache.get(key)

    cache.set(key, func(...params))

    return func(...params)
  }
}

module.exports = memoization
