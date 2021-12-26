const memoization = (func) => {
  const cache = new Map();

  return (...params) => {
    const createKey = (arg) => JSON.stringify(arg).split('').sort().join();

    const key = createKey(params);

    if (cache.has(key)) return `get from cache ${cache.get(key)}`;

    cache.set(key, func(...params));

    return `cached ${JSON.stringify(params).slice(1, -1)}`;
  };
};

module.exports = memoization;