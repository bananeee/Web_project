"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signinController = exports.signupController = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _renterModel = _interopRequireDefault(require("../models/renterModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var saltRounds = 12;
var myPlaintextPassword = "s0//P4$$w0rD";
var someOtherPlaintextPassword = "not_bacon";

_dotenv["default"].config();

var JWT_SECRET = process.env.JWT_SECRET;

var signupController = function signupController(req, res) {
  var _req$body, username, password, phoneNumber;

  return regeneratorRuntime.async(function signupController$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password, phoneNumber = _req$body.phoneNumber;

          if (!(!username || !password || !phoneNumber)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(422).json({
            error: "Please add all the fields"
          }));

        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(_renterModel["default"].findOne({
            phoneNumber: phoneNumber
          }).then(function (saveRenter) {
            if (saveRenter) {
              return res.status(422).json({
                error: "User already exists"
              });
            }

            _bcrypt["default"].hash(password, saltRounds).then(function _callee(hashedPassword) {
              var renter;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      renter = new _renterModel["default"]({
                        username: username,
                        password: hashedPassword,
                        phoneNumber: phoneNumber
                      });
                      _context.prev = 1;
                      _context.next = 4;
                      return regeneratorRuntime.awrap(renter.save());

                    case 4:
                      res.status(201).json({
                        message: "Saved successfully"
                      });
                      _context.next = 10;
                      break;

                    case 7:
                      _context.prev = 7;
                      _context.t0 = _context["catch"](1);
                      res.status(409).json({
                        message: _context.t0.message
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, null, null, [[1, 7]]);
            });
          }));

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          res.status(404).json({
            message: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 8]]);
};

exports.signupController = signupController;

var signinController = function signinController(req, res) {
  var _req$body2, username, password;

  return regeneratorRuntime.async(function signinController$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;

          if (!(!username || !password)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return", res.status(422).json({
            error: "Please add username or password"
          }));

        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return regeneratorRuntime.awrap(_renterModel["default"].findOne({
            username: username
          }).then(function _callee2(saveRenter) {
            var match, token, _id, _username, _password, phoneNumber;

            return regeneratorRuntime.async(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (saveRenter) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return", res.status(422).json({
                      error: "Invalid username or password"
                    }));

                  case 2:
                    _context3.next = 4;
                    return regeneratorRuntime.awrap(_bcrypt["default"].compare(password, saveRenter.password));

                  case 4:
                    match = _context3.sent;

                    if (!match) {
                      _context3.next = 11;
                      break;
                    }

                    token = _jsonwebtoken["default"].sign({
                      _id: saveRenter._id
                    }, JWT_SECRET);
                    _id = saveRenter._id, _username = saveRenter.username, _password = saveRenter.password, phoneNumber = saveRenter.phoneNumber;
                    res.json({
                      token: token,
                      user: {
                        _id: _id,
                        username: _username,
                        password: _password,
                        phoneNumber: phoneNumber
                      }
                    });
                    _context3.next = 12;
                    break;

                  case 11:
                    return _context3.abrupt("return", res.status(422).json({
                      error: "Invalid usename or password"
                    }));

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 6:
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](3);
          res.status(404).json({
            message: _context4.t0.message
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[3, 8]]);
};

exports.signinController = signinController;