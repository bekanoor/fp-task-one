const memoization = (func) => {
  const cache = new Map();

  return (...params) => {
    const result = params.map((arg) => {
      const key = JSON.stringify(arg);

      if (cache.has(key)) return `get from cache ${cache.get(key)}`;

      cache.set(key, func(arg));

      return `cached ${key}`;
    });

    return result.join(" ");
  };
};

module.exports = memoization;
