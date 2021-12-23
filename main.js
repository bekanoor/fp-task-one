let number = 5;
let anotherNumber = 10;

const memoization = (...args) => {
  let result = 0;

  for (let value of args) {
    result += value;
    if(result === 15) {
      return result + " memo!";
    }
  }
  
  return result;
}

console.log(memoization(number, anotherNumber))

module.exports = memoization;