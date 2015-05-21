module.exports.reversePlusOne = function (arr) {
  arr.reverse().unshift(1);
  return arr;
};

module.exports.plusesEverywhere = function (arr) {
  return arr.join("+");
}

module.exports.arrayQuantityPlusOne = function (arr) {
  return arr.length + 1;
};