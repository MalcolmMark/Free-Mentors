"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authanticate = exports.hashPassword = exports.isEmailUsed = void 0;

var _data = require("../db/data");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isEmailUsed = function isEmailUsed(req, res, next) {
  var user = _data.users.find(function (user) {
    return user.email == req.body.email;
  });

  if (user) {
    return res.status(401).send({
      'status': 401,
      'message': 'Email already exists',
      'data': user.email
    });
  }

  next();
};

exports.isEmailUsed = isEmailUsed;

var hashPassword =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var salt, hashPassword;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].genSalt(10);

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcrypt["default"].hash(req.body.password, salt);

          case 5:
            hashPassword = _context.sent;
            req.body.password = hashPassword;
            next();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hashPassword(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.hashPassword = hashPassword;

var authanticate =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user, validPassword;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            user = _data.users.find(function (user) {
              return user.email == req.body.email;
            });
            _context2.next = 3;
            return _bcrypt["default"].compare(req.body.password, user.password);

          case 3:
            validPassword = _context2.sent;

            if (!(user && validPassword)) {
              _context2.next = 8;
              break;
            }

            next();
            _context2.next = 9;
            break;

          case 8:
            return _context2.abrupt("return", res.status(404).send({
              'status': 404,
              'message': 'Email or Password is not match, please try again.'
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function authanticate(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.authanticate = authanticate;