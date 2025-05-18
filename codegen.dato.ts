import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com/': {
        headers: {
          Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        },
      },
    }
  ],
  documents: 'src/lib/dato/**/*.{ts,tsx}',
  generates: {
    'src/lib/dato/graphql-types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
