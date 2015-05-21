module.exports.getKeys = function (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key);
  }
  return arr;
};

module.exports.getValues = function (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

module.exports.objectToArray = function (obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key + " is " + obj[key]);
  }
  return arr;
};