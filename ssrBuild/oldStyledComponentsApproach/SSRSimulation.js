'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _server = require('react-dom/server');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var fs = require('fs');

var scSheet = new _styledComponents.ServerStyleSheet();
var appString = (0, _server.renderToString)(scSheet.collectStyles(_react2['default'].createElement(_App2['default'], null)));
var styles = scSheet.getStyleTags();

fs.writeFile('ssr-output/oldStyledComponentsApproach/appstring.txt', appString, function (err) {
  if (err) throw err;

  console.log("Wrote Appstring to /ssr-output/oldStyledComponentsApproach/appstring.txt");
});

fs.writeFile('ssr-output/oldStyledComponentsApproach/styleString.txt', styles, function (err) {
  console.log("Wrote Style string to /ssr-output/oldStyledComponentsApproach/stylestring.txt");
});