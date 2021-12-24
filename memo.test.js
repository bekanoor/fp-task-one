const memoization = require('./memoization');
const complex = require('./complexFunctions');

test('memoization by number', () => {
  const memo = memoization(complex.complexСalculations);

  expect(memo(5)).toBe(`cached 5`);
  expect(memo(5)).toBe(`get from cache 5`);
});

test('memoization by numbers', () => {
  const memo = memoization(complex.complexСalculations);

  expect(memo(42,41,40)).toBe(`cached 42 cached 41 cached 40`);
  expect(memo(42,41,40)).toBe(`get from cache 42 get from cache 41 get from cache 40`);
});