import { datoFetch } from '../client';
import { TestQueryQuery } from '../graphql-types';
import { gql } from 'graphql-request';

const query = gql`
  query TestQuery {
    allTestcontents {
      id
      title
    }
  }
`;

export async function getTestQuery() {
  const res = await datoFetch<TestQueryQuery>({
    query,
  });

  return res.allTestcontents;
}
