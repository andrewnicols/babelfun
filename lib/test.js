(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './bar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./bar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bar);
    global.test = mod.exports;
  }
})(this, function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  console.log(_bar.something);
  exports.default = _bar.something + 1;
});