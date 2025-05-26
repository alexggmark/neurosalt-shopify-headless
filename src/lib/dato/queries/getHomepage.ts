import { datoFetch } from '../client';
import { GetHomepageQuery } from '../graphql-types';
import { gql } from 'graphql-request';

const query = gql`
  query GetHomepage {
    page(filter: {slug: {eq: "homepage"}}) {
      content {
        ... on HerobannerRecord {
          __typename
          id
          title
          toptitle
          ctatext
          ctaurl
          description
          bannerimage {
            url
          }
        }
        ... on ValuepropstripRecord {
          __typename
          id
          text {
            text
          }
        }
        ... on CollectiongridRecord {
          __typename
          id
          ctaLink
          ctaText
          title
          collectiontile {
            image {
              url
              alt
            }
            link
            title
          }
        }
        ... on AuthoritystripRecord {
          __typename
          id
          content {
            image {
              url
            }
            text
          }
        }
        ... on ProductgridRecord {
          __typename
          collectionHandle
          ctaLink
          ctaText
          limit
          title
        }
        ... on CarouselslidecontainerRecord {
          __typename
          slide {
            toptitle
            text
            maintitle
            ctaText
            ctaLink
            backgroundimage {
              url
            }
          }
          title
        }
        ... on ImageblockiconRecord {
          __typename
          title
          description
          ctaText
          ctaLink
          icon {
            image {
              url
            }
            title
          }
          backgroundimage {
            url
          }
        }
        ... on IngredientdropdownRecord {
          __typename
          description
          title
          ingredient {
            information
            title
            ingredientimage {
              url
            }
          }
        }
      }
      slug
    }
  }
`;

export async function getHomepageQuery() {
  const res = await datoFetch<GetHomepageQuery>({
    query,
  });

  return res;
}
