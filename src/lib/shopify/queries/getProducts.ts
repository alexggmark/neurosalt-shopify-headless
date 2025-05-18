import { shopifyFetch } from '../client';
import { GetProductsQuery } from '../graphql-types';
import { gql } from 'graphql-request';

const query = gql`
  query GetProducts($first: Int = 8) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url(transform: {maxWidth: 400})
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
        }
      }
    }
  }
`;

export async function getProducts() {
  const res = await shopifyFetch<GetProductsQuery>({ query });
  return res;
}