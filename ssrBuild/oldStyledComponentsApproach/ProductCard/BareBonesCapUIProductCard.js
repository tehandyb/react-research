'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// import { Heading, thm } from 'cap-ui';
// import Link from '../../atoms/Link';
// import Button from '../../atoms/Button';
// import Thumbnail from '../../atoms/Thumbnail';
// import StarRating from '../../molecules/StarRating';
// import ProductCoreData from '../../../shapes/ProductCoreData';

// This is a barebones version of the CapUI src/components/molecules/ProductCard/DesktopProductCard.js
// This will not include anything that is not currently in the early version of the design token utility classes.
// This is an effort to do an apples to apples performance comparison.

var ProductCardHeaderContainer = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardHeaderContainer',
  componentId: 'ksjz6b-0'
})(['display:flex;align-items:center;padding:24px 24px 0px 24px;']);

var ProductCardHeaderDetails = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardHeaderDetails',
  componentId: 'ksjz6b-1'
})(['display:flex;flex-wrap:wrap;align-items:center;']);

var ProductCardInfo = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardInfo',
  componentId: 'ksjz6b-2'
})(['background:#FFFFFF;border-style:solid;border-width:1px;border-color:#B2CCDB;height:100%;']);

var ProductCardDescription = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardDescription',
  componentId: 'ksjz6b-3'
})(['padding:24px;']);

var ProductCardHeader = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardHeader',
  componentId: 'ksjz6b-4'
})(['display:flex;width:100%;flex-direction:column;']);

var ProductCardHeaderBasicInfo = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductCardHeaderBasicInfo',
  componentId: 'ksjz6b-5'
})(['display:flex;justify-content:space-between;padding-bottom:8px;']);

var StarRatingContainer = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__StarRatingContainer',
  componentId: 'ksjz6b-6'
})(['margin-right:32px;']);

var ProductHeader = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductHeader',
  componentId: 'ksjz6b-7'
})(['font-size:24px;color:black;font-weight:normal;margin-top:8px;margin-bottom:8px;']);

var ProductThumbNailContainer = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ProductThumbNailContainer',
  componentId: 'ksjz6b-8'
})(['padding-right:24px;']);

var ButtonContainer = _styledComponents2['default'].div.withConfig({
  displayName: 'BareBonesCapUIProductCard__ButtonContainer',
  componentId: 'ksjz6b-9'
})(['flex:0 0 44%;text-align:right;']);

var DesktopProductCard = function DesktopProductCard(_ref) {
  var product = _ref.product;

  var productUrl = '/p/' + String(product.productId) + '/' + String(product.slug);

  return _react2['default'].createElement(
    ProductCardInfo,
    null,
    _react2['default'].createElement(
      ProductCardHeaderContainer,
      null,
      _react2['default'].createElement(
        ProductThumbNailContainer,
        null,
        _react2['default'].createElement(
          'div',
          null,
          'Thumbnail'
        )
      ),
      _react2['default'].createElement(
        ProductCardHeader,
        null,
        _react2['default'].createElement(
          ProductCardHeaderBasicInfo,
          null,
          _react2['default'].createElement(
            ProductHeader,
            { level: 3 },
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
          ProductCardHeaderDetails,
          null,
          _react2['default'].createElement(
            StarRatingContainer,
            null,
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
      ProductCardDescription,
      null,
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