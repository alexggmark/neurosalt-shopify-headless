import { GetProductsQuery } from "@/lib/shopify/graphql-types";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

type Props = {
  data: GetProductsQuery;
}

export default function ProductGrid({ data }: Props) {
  return (
    <div className="page-width">
      <div className="flex justify-between items-center pt-24 pb-7">
        <h2 className="font-heading-xl">
          What’s hot
        </h2>
        <div className="flex justify-end">
          <Link href="/posts/first-post" className="link-underline-inverted">
            Shop All Products
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.products.edges.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}