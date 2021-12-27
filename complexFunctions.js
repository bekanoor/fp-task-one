const complexСalculations = (...args) =>
  args.reduce((prev, next) => prev + next, 0)

const complexСalculationsForObject = (...obj) =>
  obj
    .map((item) => {
      let result = 0

      for (const key in item) result += item[key]

      return result
    })
    .reduce((prev, next) => prev + next, 0)

module.exports = {
  complexСalculations,
  complexСalculationsForObject
}
