module.exports = function reverse (n) {
  let numReverse = String(Math.abs(n)).split('').reverse().join('');
  return numReverse;
}

