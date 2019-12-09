'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// import thm from '../../../theme';
// import { thm } from 'cap-ui';
// import Link from '../../atoms/Link';
// import Button from '../../atoms/Button';
// import Thumbnail from '../../atoms/Thumbnail';
// import StarRating from '../../molecules/StarRating';
// import ProductCoreData from '../../../shapes/ProductCoreData';

// This is a barebones version of the CapUI src/components/molecules/ProductCard/DesktopProductCard.js
// This will not include anything that is not currently in the early version of the design token utility classes.
// This is an effort to do an apples to apples performance comparison.

var DesktopProductCard = function DesktopProductCard(_ref) {
  var product = _ref.product;

  var productUrl = '/p/' + String(product.productId) + '/' + String(product.slug);

  return _react2['default'].createElement(
    'div',
    { className: 'background-light light-border full-height' },
    _react2['default'].createElement(
      'div',
      { className: 'flex align-items-center padding-top-24 padding-right-24 padding-left-24' },
      _react2['default'].createElement(
        'div',
        { className: 'padding-right-24' },
        _react2['default'].createElement(
          'div',
          null,
          'Thumbnail'
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'flex full-width flex-column' },
        _react2['default'].createElement(
          'div',
          { className: 'flex space-between padding-bottom-8' },
          _react2['default'].createElement(
            'div',
            { className: 'gamma-header margin-top-8 margin-bottom-8' },
            _react2['default'].createElement(
              'div',
              null,
              product.name
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'div',
              null,
              'View Profile'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'flex wrap align-items-center' },
          _react2['default'].createElement(
            'div',
            { className: 'margin-right-32' },
            _react2['default'].createElement(
              'div',
              null,
              'Rating: ',
              product.overallRating
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            'Write a Review!'
          )
        )
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: 'padding-top-24 padding-right-24 padding-bottom-24 padding-left-24' },
      _react2['default'].createElement(
        'b',
        null,
        'Details:'
      ),
      ' ',
      product.longDescription
    )
  );
};

// DesktopProductCard.propTypes = {
//   product: ProductCoreData,
// };

DesktopProductCard.defaultProps = {
  product: undefined
};

exports['default'] = DesktopProductCard;