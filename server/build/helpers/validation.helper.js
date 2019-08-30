"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signupSchema = {
  email: _joi["default"].string().strict().trim().required().email(),
  first_name: _joi["default"].string().strict().trim().required(),
  last_name: _joi["default"].string().strict().trim().required(),
  password: _joi["default"].string().strict().trim().min(6).required(),
  address: _joi["default"].string().strict().trim().required(),
  bio: _joi["default"].string().strict().trim().required(),
  occupation: _joi["default"].string().strict().trim().required(),
  expertise: _joi["default"].string().strict().trim().required()
};
var signinSchema = {
  email: _joi["default"].string().strict().trim().required().email(),
  password: _joi["default"].string().strict().trim().min(6).required()
}; // export the schema

var _default = {
  '/signup': signupSchema,
  '/signin': signinSchema
};
exports["default"] = _default;