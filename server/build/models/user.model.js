"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(email, first_name, last_name, password, address, bio, occupation, expertise) {
  var role = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "user";

  _classCallCheck(this, User);

  this.email = email;
  this.first_name = first_name;
  this.last_name = last_name;
  this.password = password;
  this.address = address;
  this.bio = bio;
  this.occupation = occupation;
  this.expertise = expertise;
  this.role = role;
};

exports.User = User;