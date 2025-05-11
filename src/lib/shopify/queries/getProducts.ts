import { shopifyFetch } from "../client";

const query = `
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
  const res = await shopifyFetch({ query });
  return res.products;
}