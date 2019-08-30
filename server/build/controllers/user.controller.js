"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = require("../models/user.model");

var _data = require("../db/data");

var _token = require("../helpers/token.helper");

var signin = function signin(req, res) {
  var token = (0, _token.genToken)(req.body.email);
  return res.status(200).send({
    "status": 200,
    "message": "User is successfully logged in",
    "data": {
      "token": token
    }
  });
};

var signup = function signup(req, res) {
  var user = new _user.User(req.body.email, req.body.first_name, req.body.last_name, req.body.password, req.body.address, req.body.bio, req.body.occupation, req.body.expertise);

  _data.users.push(user);

  var token = (0, _token.genToken)(user.email);
  return res.status(201).send({
    "status": 201,
    "message": "User created successfully",
    "data": {
      "token": token,
      "message": "User created successfully"
    }
  });
};

var _default = {
  signin: signin,
  signup: signup
};
exports["default"] = _default;