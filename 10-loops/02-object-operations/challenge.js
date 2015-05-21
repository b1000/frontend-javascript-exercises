module.exports.copy = function (obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
};

module.exports.extend = function (dest, src) {
  for (var key in src) {
    dest[key] = src[key];
  }
  return dest;
}

module.exports.hasElems = function (obj, arr) {
  for (var i = 0;i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      return false;
    }
  }
  return true;
}