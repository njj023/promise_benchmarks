"use strict";
function objectOrFunction(x) {
  return isFunction(x) || (typeof x === "object" && x !== null);
}

exports.objectOrFunction = objectOrFunction;function isFunction(x) {
  return typeof x === "function";
}

exports.isFunction = isFunction;function isNonThenable(x) {
  return !(objectOrFunction(x) && typeof x.then === 'function');
}

exports.isNonThenable = isNonThenable;function isArray(x) {
  return Object.prototype.toString.call(x) === "[object Array]";
}

exports.isArray = isArray;// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
var now = Date.now || function() { return new Date().getTime(); };

var keysOf = Object.keys || function(object) {
  var result = [];

  for (var prop in object) {
    result.push(prop);
  }

  return result;
};
exports.keysOf = keysOf;


exports.now = now;
exports.keysOf = keysOf;