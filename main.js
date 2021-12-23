const complexСalculations = (number) => {
  return number;
};

const memoization = (func) => {
  const cache = new Map();

  return function (param) {
    if (cache.has(param)) {
      console.log(`Get from cache ${param}`);

      return cache.get(param);
    }

    cache.set(param, func(param));
    console.log(`Cached ${param}`);
  };
};

module.exports = memoization;