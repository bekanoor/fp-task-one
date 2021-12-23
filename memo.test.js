const memoization = require('./main');

test('test memoization by number', () => {
  expect(memoization(5)).toBe(`${5} cached`);
  expect(memoization(5)).toBe(`${5} get from cache`);
});