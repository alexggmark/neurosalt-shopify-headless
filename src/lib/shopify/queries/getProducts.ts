import { shopifyFetch } from '../client';
import { GetProductsQuery } from '../generated-types';
import { gql } from 'graphql-request';

const query = gql`
  query GetProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
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
  return res.products;
}