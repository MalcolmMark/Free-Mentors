"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3000;

var server = _app["default"].listen(PORT, function () {
  return console.log("Server is live on port: ".concat(PORT));
});

var _default = server;
exports["default"] = _default;