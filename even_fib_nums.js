/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`, `firstValue`, `secondValue`
 *
 * @param  {Number} maxFibValue
 * @param  {Number} firstValue
 * @param  {Number} secondValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue, firstValue, secondValue ) {
  let sum = 0;
  let prevVal = firstValue;
  let currentVal = secondValue;
  let temp;

  while (currentVal <= maxFibValue) {
    // if current is even, add it to the sum
    if (currentVal % 2 === 0) {
      sum += currentVal;
    }

    // sum of last two values
    temp = prevVal + currentVal;
    // move up to the old current
    prevVal = currentVal;
    // move up to the new currnet
    currentVal = temp;
  }

  return sum;
}

module.exports = {
  sumFibs : _sumFibs,
};
