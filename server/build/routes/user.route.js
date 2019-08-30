"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _validation = require("../middleware/validation.middleware");

var _user2 = require("../middleware/user.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/signin', _validation.validate, _user2.authanticate, _user["default"].signin);
router.post('/signup', _validation.validate, _user2.isEmailUsed, _user2.hashPassword, _user["default"].signup);
var _default = router;
exports["default"] = _default;