const memoization = (func) => {
  const cache = new Map();

  return function (...params) {
    const result = params.map((arg) => {
      if (cache.has(arg)) return `get from cache ${cache.get(arg)}`;

      cache.set(arg, func(arg));

      return `cached ${arg}`;
    });

    return result.join(" ");
  };
};

module.exports = memoization;