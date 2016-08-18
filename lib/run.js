(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./test", "./bar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./test"), require("./bar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.test, global.bar);
    global.run = mod.exports;
  }
})(this, function (_test, _bar) {
  "use strict";

  var test = _interopRequireWildcard(_test);

  var bar = _interopRequireWildcard(_bar);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  console.log(test);

  console.log(bar);
});