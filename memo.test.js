const memoization = require('./main');

test('bla-bla i\'m test', () => {
  expect(memoization(5, 10)).toBe(`${15} memo!`);
});

