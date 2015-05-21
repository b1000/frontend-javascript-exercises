module.exports.addItem = function (item, arr) {
  if (arr.indexOf(item) == -1) {
    arr.push(item);
  }
  return arr;
};

module.exports.reverseSortedList = function (arr) {
  arr.sort().reverse();
  return arr;
};