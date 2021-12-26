const memoization = require("./memoization");
const complex = require("./complexFunctions");

test("memoization by number", () => {
  const memo = memoization(complex.complexСalculations);

  expect(memo(5)).toBe(`cached 5`);
  expect(memo(5)).toBe(`get from cache 5`);
});

test("memoization by numbers", () => {
  const memo = memoization(complex.complexСalculations);

  expect(memo(42, 322)).toBe(`cached 42,322`);
  expect(memo(42, 322)).toBe(`get from cache 364`);
});

test("memoization by numbers with different args order", () => {
  const memo = memoization(complex.complexСalculations);

  expect(memo(42, 322)).toBe(`cached 42,322`);
  expect(memo(322, 42)).toBe(`get from cache 364`);
});

test("memoization by object", () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const orange = { price: 300, weight: 200, height: 100 };

  expect(memo(orange)).toBe(`cached {"price":300,"weight":200,"height":100}`);
  expect(memo(orange)).toBe(`get from cache 600`);
});

test("memoization by objects", () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const orange = { price: 300, weight: 200, height: 100 };
  const tangerines = { price: 300, weight: 200, height: 100 };

  expect(memo(orange, tangerines)).toBe(
    `cached {"price":300,"weight":200,"height":100},{"price":300,"weight":200,"height":100}`
  );
  expect(memo(orange, tangerines)).toBe(`get from cache 1200`);
});

test("memoization by objects with different args order", () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const orange = { price: 300, weight: 200, height: 100 };
  const tangerines = { price: 300, weight: 200, height: 100 };

  expect(memo(orange, tangerines)).toBe(
    `cached {"price":300,"weight":200,"height":100},{"price":300,"weight":200,"height":100}`
  );
  expect(memo(orange, tangerines)).toBe(`get from cache 1200`);
});

test("memoization by array", () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const collection = [100, 100, 100];

  expect(memo(collection)).toBe(`cached [100,100,100]`);
  expect(memo(collection)).toBe(`get from cache 300`);
});

test("memoization by arrays with different args order", () => {
  const memo = memoization(complex.complexСalculationsForObject);
  const collection = [100, 100, 100];
  const union = [100, 100, 100];

  expect(memo(collection, union)).toBe(`cached [100,100,100],[100,100,100]`);
  expect(memo(union, collection)).toBe(`get from cache 600`);
});