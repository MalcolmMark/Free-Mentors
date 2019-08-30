"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

var _user = require("../models/user.model");

/* User Data */
var users = [new _user.User('Koko', 'Ange', 'angeko@gmail.com', 'ksjkfjjf', 'Miduha', 'I am ...', 'Developer', 'Swift'), new _user.User()];
/*  */

exports.users = users;