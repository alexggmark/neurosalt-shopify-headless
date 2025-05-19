import { gql } from 'graphql-request';
import { shopifyFetch } from '../client';
import { GetProductByHandleQuery } from '../graphql-types';

const query = gql`
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      featuredImage {
        url(transform: {maxWidth: 800})
        altText
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url(transform: {maxWidth: 1000})
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            availableForSale
            id
            sku
            title
            quantityAvailable
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export async function getShopifyProduct(handle: string) {
  const res = await shopifyFetch<GetProductByHandleQuery>({
    query,
    variables: { handle },
  });

  return res;
}
