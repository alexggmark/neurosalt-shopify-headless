import { gql } from 'graphql-request';
import { shopifyFetch } from '../client';
import { GetProductByHandleQuery } from '../graphql-types';

const query = gql`
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
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
`;

export async function getShopifyProduct(handle: string) {
  const res = await shopifyFetch<GetProductByHandleQuery>({
    query,
    variables: { handle },
  });

  return res.productByHandle;
}
