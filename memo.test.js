const memoization = require('./memoization')
const complex = require('./complexFunctions')

test('how many times function was called', () => {
  const resolve = jest.fn((...args) =>
    args.reduce((prev, next) => prev + next, 0)
  )

  const memo = memoization(resolve)

  memo(5, 10, 15, 20)
  memo(5, 10, 15, 20)
  memo(5, 10, 15, 20)
  memo(5, 10, 15, 20)

  expect(resolve.mock.calls.length).toBe(1)
})

test('memoization by number', () => {
  const memo = memoization(complex.complexСalculations)

  expect(memo(5)).toBe(5)
  expect(memo(5)).toBe(5)
})

test('memoization by numbers', () => {
  const memo = memoization(complex.complexСalculations)

  expect(memo(42, 322)).toBe(364)
  expect(memo(42, 322)).toBe(364)
})

test('memoization by numbers with different args order', () => {
  const memo = memoization(complex.complexСalculations)

  expect(memo(42, 322)).toBe(364)
  expect(memo(322, 42)).toBe(364)
})

test('memoization by object', () => {
  const memo = memoization(complex.complexСalculationsForObject)
  const orange = { price: 300, weight: 200, height: 100 }

  expect(memo(orange)).toBe(600)
  expect(memo(orange)).toBe(600)
})

test('memoization by objects', () => {
  const memo = memoization(complex.complexСalculationsForObject)
  const orange = { price: 300, weight: 200, height: 100 }
  const tangerines = { price: 300, weight: 200, height: 100 }

  expect(memo(orange, tangerines)).toBe(1200)
  expect(memo(orange, tangerines)).toBe(1200)
})

test('memoization by objects with different args order', () => {
  const memo = memoization(complex.complexСalculationsForObject)
  const orange = { price: 300, weight: 200, height: 100 }
  const tangerines = { price: 300, weight: 200, height: 100 }

  expect(memo(orange, tangerines)).toBe(1200)
  expect(memo(orange, tangerines)).toBe(1200)
})

test('memoization by array', () => {
  const memo = memoization(complex.complexСalculationsForObject)
  const collection = [100, 100, 100]

  expect(memo(collection)).toBe(300)
  expect(memo(collection)).toBe(300)
})

test('memoization by arrays with different args order', () => {
  const memo = memoization(complex.complexСalculationsForObject)
  const collection = [100, 100, 100]
  const union = [100, 100, 100]

  expect(memo(collection, union)).toBe(600)
  expect(memo(union, collection)).toBe(600)
})
