'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var fs = require('fs');

var appString = (0, _server.renderToString)(_react2['default'].createElement(_App2['default'], null));

fs.writeFile('ssr-output/newCssApproach/appstring.txt', appString, function (err) {
  if (err) throw err;

  console.log("Wrote Appstring to /ssr-output/newCssApproach/appstring.txt");
});