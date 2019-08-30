"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var genToken = function genToken(email) {
  return _jsonwebtoken["default"].sign({
    email: email
  }, process.env.KEY);
};

exports.genToken = genToken;