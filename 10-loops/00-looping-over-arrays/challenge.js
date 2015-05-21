module.exports.sumNumbers = function(arr) {
  var sum = 0;
  for (var i = 0;i < arr.length; i++) {
    sum += arr[i]; 
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(str) {
  var arr = str.split(",");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return arr;
};

module.exports.addIndex = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = i + " is " + arr[i];
  }
  return newArr;
};
