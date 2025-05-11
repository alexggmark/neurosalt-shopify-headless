
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://neurosalt-headless.myshopify.com/api/2024-04/graphql.json': {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        },
      },
    },
  ],
  documents: "src/lib/shopify/**/*.ts",
  generates: {
    "src/lib/shopify/generated-types.ts": {
      plugins: ['typescript', 'typescript-operations']
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
