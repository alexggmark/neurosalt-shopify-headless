import { GetHomepageQuery } from "@/lib/dato/graphql-types";

type Page = NonNullable<GetHomepageQuery["page"]>;
type Block = Page["content"][number];

export type HeroBannerBlock = Extract<Block, { __typename: "HerobannerRecord" }>;
export type CollectionGridBlock = Extract<Block, { __typename: "CollectiongridRecord" }>;
export type CollectionTile = CollectionGridBlock["collectiontile"][number];
export type AuthorityBlock = Extract<Block, { __typename: "AuthoritystripRecord" }>;
export type ProductGridBlock = Extract<Block, { __typename: "ProductgridRecord" }>;
export type CarouselSlideBlock = Extract<Block, { __typename: "CarouselslidecontainerRecord" }>;