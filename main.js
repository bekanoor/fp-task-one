const complexСalculations = (something) => {
  return something;
};

const memoization = (func) => {
  const cache = new Map();

  return function (...params) {
    params.map((arg) => {
      if (cache.has(arg)) {
        console.log(`Get from cache ${arg}`);

        return cache.get(arg);
      }

      cache.set(arg, func(arg));
      console.log(`Cached ${arg}`);
    });
  };
};

module.exports = memoization;