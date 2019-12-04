import React from 'react';
import styled from 'styled-components';
// import thm from '../../../theme';
import { Heading, thm } from 'cap-ui';
// import Link from '../../atoms/Link';
// import Button from '../../atoms/Button';
// import Thumbnail from '../../atoms/Thumbnail';
// import StarRating from '../../molecules/StarRating';
// import ProductCoreData from '../../../shapes/ProductCoreData';

// This is a barebones version of the CapUI src/components/molecules/ProductCard/DesktopProductCard.js
// This will not include anything that is not currently in the early version of the design token utility classes.
// This is an effort to do an apples to apples performance comparison.

const ProductCardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${thm.sizeUnits(3)} ${thm.sizeUnits(3)} 0px ${thm.sizeUnits(3)};
`;

const ProductCardHeaderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ProductCardInfo = styled.div`
  background: ${thm.blankBackgroundColor};
  border-style: solid;
  border-width: 1px;
  border-color: ${thm.imagePlaceholderColor};
  height: 100%;
`;

const ProductCardDescription = styled.div`
  padding: ${thm.sizeUnits(3)};
`;

const ProductCardHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProductCardHeaderBasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${thm.sizeUnits(1)};
`;

const StarRatingContainer = styled.div`
  margin-right: ${thm.sizeUnits(4)};
`;


const ProductHeader = styled(Heading)`
  font-size: ${thm.fontSizes.gamma};
  color: black;
  font-weight: normal;
`;

const ProductThumbNailContainer = styled.div`
  padding-right: ${thm.sizeUnits(3)};
`;

const ButtonContainer = styled.div`
  flex: 0 0 44%;
  text-align: right;
`;

const DesktopProductCard = ({ product }) => {
  const productUrl = `/p/${product.productId}/${product.slug}`;

  return (
    <ProductCardInfo>
      <ProductCardHeaderContainer>
        <ProductThumbNailContainer>
          {/* <Thumbnail src={product.logoUrl} size="extra-large" href={productUrl} /> */}
          <div>Thumbnail</div>
        </ProductThumbNailContainer>
        <ProductCardHeader>
          <ProductCardHeaderBasicInfo>
            <ProductHeader level={3}>
              {/* <Link href={productUrl}>{product.name}</Link> */}
              <div>{product.name}</div>
            </ProductHeader>
            <div>
              {/* <Button href={productUrl}>View Profile</Button> */}
              <div>View Profile</div>
            </div>
          </ProductCardHeaderBasicInfo>

          <ProductCardHeaderDetails>
            <StarRatingContainer>
              {/* <StarRating
                rating={product.overallRating}
                showRatingValue
                count={product.reviewCount}
                href={`${productUrl}/#reviews`}
              /> */}
              <div>Rating: {product.overallRating}</div>
            </StarRatingContainer>

            {/* <Link href={`https://reviews.capterra.com/new/${product.productId}`}>Write a Review!</Link> */}
            <div>Write a Review!</div>
          </ProductCardHeaderDetails>
        </ProductCardHeader>
      </ProductCardHeaderContainer>

      <ProductCardDescription>
        <b>Details:</b> {product.longDescription}
      </ProductCardDescription>
    </ProductCardInfo>
  );
};

// DesktopProductCard.propTypes = {
//   product: ProductCoreData,
// };

DesktopProductCard.defaultProps = {
  product: undefined,
};

export default DesktopProductCard;
