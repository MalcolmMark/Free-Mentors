"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validation = _interopRequireDefault(require("../helpers/validation.helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validate = function validate(req, res, next) {
  // enabled HTTP methods for request data validation
  var _supportedMethods = ['post', 'put', 'patch'];
  var path = req.route.path;
  var method = req.method.toLowerCase();

  if (_supportedMethods.includes(method) && _validation["default"][path] != undefined) {
    // get schema for the current route
    var schema = _validation["default"][path]; // Validate req.body using the schema and validation options

    return _joi["default"].validate(req.body, schema, function (error, data) {
      if (error) {
        return res.status(404).send({
          'status': 404,
          'error': error.details[0].message
        });
      } else {
        // Replace req.body with the data after Joi validation
        req.body = data;
        next();
      }
    });
  }

  next();
};

exports.validate = validate;