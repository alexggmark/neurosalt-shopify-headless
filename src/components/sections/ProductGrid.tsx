import { GetProductsQuery } from "@/lib/shopify/graphql-types";
import { ProductGridBlock } from "@/lib/dato/types";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

type Props = {
  shopifyData: GetProductsQuery;
  data: ProductGridBlock;
}

export default function ProductGrid({ shopifyData, data }: Props) {
  return (
    <div className="page-width">
      <div className="flex justify-between items-center pt-24 pb-7">
        <h2 className="font-heading-xl">
          {data.title}
        </h2>
        <div className="flex justify-end">
          <Link href={data.ctaLink ? data.ctaLink : "/posts/first-post"} className="link-underline-inverted">
            {data.ctaText}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {shopifyData.products.edges.slice(0, data.limit ? data.limit : 0).map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}