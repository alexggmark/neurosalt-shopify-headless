import { datoFetch } from '../client';
import { TestQuery, TestQueryVariables } from '../generated-types';
import { gql } from 'graphql-request';

const query = gql`
  query TestQuery($first: Int = 4)  {
    allTestcontents(first: $first) {
      id
      title
    }
  }
`;

export async function getTestQuery() {
  const res = await datoFetch<TestQuery>({
    query,
    variables: { first: 4 } satisfies TestQueryVariables,
  });

  return res.allTestcontents;
}
