const complexСalculationsForNumber = (something) => something + 42;

const complexСalculationsForObject = (obj) => {
  let sum = 0;

  for (let key in obj) sum += obj[key];

  return sum;
};  

const complexСalculationsForArray = (arr) =>
  arr.reduce((prev, next) => prev + next, 0);

module.exports = {
  complexСalculationsForNumber,
  complexСalculationsForObject,
  complexСalculationsForArray,
};