"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = verifyToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function verifyToken(req, res, next) {
  var token = req.header('token');
  if (!token) return res.status(401).send({
    'status': 401,
    'message': 'Please sign in first.'
  });

  try {
    var verified = _jsonwebtoken["default"].verify(token, process.env.KEY); // Verify provided user token if is still loged in


    req.user = {
      'token': verified,
      'email': verified.email
    }; // Store user token and role for leter uses

    next(); // Let continue
  } catch (error) {
    res.status(400).send({
      'status': 400,
      'message': 'Invalid token!'
    });
  }
}