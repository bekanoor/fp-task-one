const memoization = require('./memoization');
const complex = require('./complexFunctions');

test('memoization by number', () => {
  const memo = memoization(complex.complexСalculationsForNumber);

  expect(memo(0)).toBe(`cached 0`);
  expect(memo(0)).toBe(`get from cache 42`);
});

test('memoization by numbers', () => {
  const memo = memoization(complex.complexСalculationsForNumber);

  expect(memo(42,322)).toBe(`cached 42 cached 322`);
  expect(memo(42,322)).toBe(`get from cache 84 get from cache 364`);
});

test('memoization by object', () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const orange = {"price":300,"weight":200,"height":100};

  expect(memo(orange)).toBe(`cached {"price":300,"weight":200,"height":100}`);
  expect(memo(orange)).toBe(`get from cache 600`);
});

test('memoization by objects', () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const orange = {price: 300, weight: 200, height: 100};
  const tangerines  = {price: 300, weight: 200, height: 100};

  expect(memo(orange)).toBe(`cached {"price":300,"weight":200,"height":100}`);
  expect(memo(tangerines)).toBe(`get from cache 600`);
});