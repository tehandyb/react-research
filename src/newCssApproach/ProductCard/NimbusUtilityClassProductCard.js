import React from 'react';
// import styled from 'styled-components';
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

const DesktopProductCard = ({ product }) => {
  const productUrl = `/p/${product.productId}/${product.slug}`;

  return (
    <div className="background-light light-border full-height">
      <div className="flex align-items-center padding-top-24 padding-right-24 padding-left-24">
        <div className="padding-right-24">
          {/* <Thumbnail src={product.logoUrl} size="extra-large" href={productUrl} /> */}
          <div>Thumbnail</div>
        </div>
        <div className="flex full-width flex-column">
          <div className="flex space-between padding-bottom-8">
            <div className="gamma-header margin-top-8 margin-bottom-8">
              {/* <Link href={productUrl}>{product.name}</Link> */}
              <div>{product.name}</div>
            </div>
            <div>
              {/* <Button href={productUrl}>View Profile</Button> */}
              <div>View Profile</div>
            </div>
          </div>

          <div className="flex wrap align-items-center">
            <div className="margin-right-32">
              {/* <StarRating
                rating={product.overallRating}
                showRatingValue
                count={product.reviewCount}
                href={`${productUrl}/#reviews`}
              /> */}
              <div>Rating: {product.overallRating}</div>
            </div>

            {/* <Link href={`https://reviews.capterra.com/new/${product.productId}`}>Write a Review!</Link> */}
            <div>Write a Review!</div>
          </div>
        </div>
      </div>

      <div className="padding-top-24 padding-right-24 padding-bottom-24 padding-left-24">
        <b>Details:</b> {product.longDescription}
      </div>
    </div>
  );
};

// DesktopProductCard.propTypes = {
//   product: ProductCoreData,
// };

DesktopProductCard.defaultProps = {
  product: undefined,
};

export default DesktopProductCard;
