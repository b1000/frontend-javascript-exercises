module.exports.createCourse = function (courseTitle, courseDuration, courseStudents) {
  var course = {};
  course.title = courseTitle;
  course.duration = courseDuration;
  course.students = courseStudents;

  return course;
};

module.exports.addProperty = function (obj, newProp, newValue) {
  if (!(newProp in obj)) {
    obj[newProp] = newValue;
  }
  
  return obj;
};

module.exports.formLetter = function (letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\n" + "Sincerely,\n" + letter.sender;
};

module.exports.canIGet = function (item, money) {
  var priceTable = {};
  priceTable['MacBook Air'] = 999;
  priceTable['MacBook Pro'] = 1299;
  priceTable['Mac Pro'] = 2499;
  priceTable['Apple Sticker'] = 1;

  return priceTable[item] <= money;
};