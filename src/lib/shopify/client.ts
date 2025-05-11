export const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
export const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function shopifyFetch({ query, variables = {} }: { query: string; variables?: Record<string, any> }) {
  const endpoint = `https://${SHOPIFY_DOMAIN}/api/2024-04/graphql.json`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Shopify Storefront API request failed');
  }

  return json.data;
}
