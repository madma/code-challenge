// assumes inputs is a string of ints separated by spaces
function maxRangeSum(str) {
  // array of gains from input string
  const gains = str.split(" ").slice(1).map(n => parseInt(n));

  // test for special cases
  // empty array or all negative values
  if (gains.length === 0 || gains.every(n => n < 0)) return 0;
  // all positive values
  if (gains.every(n => n > 0)) return sum(...gains);

  let currentMax = 0;
  let overallMax = 0;

  for (let i = 0; i < gains.length; i++) {
    currentMax = Math.max(0, currentMax + gains[i]);
    overallMax = Math.max(currentMax, overallMax);
    // console.log(currentMax);
    // console.log(overallMax);
  }

  return overallMax;
}

module.exports = maxRangeSum;
