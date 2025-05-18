import { GetProductsQuery } from "@/lib/shopify/graphql-types";
import Image from "next/image";
import Price from "./Price";

type Props = {
  data: GetProductsQuery['products']['edges'][number];
}

export default function ProductCard({ data }: Props) {
  return (
    <div className="bg-brand-grey rounded-lg p-8 overflow-hidden relative flex flex-col items-start">
      <div className="relative aspect-square bg-green-700 w-full">
        {data.node.featuredImage ? (
          <Image
            src={data.node.featuredImage.url}
            alt={data.node.featuredImage.altText || data.node.title}
            width={300}
            height={300}
            className="w-full h-full absolute"
          />
        ) : (
          <div className="w-full h-full bg-red-500">X</div>
        )}
      </div>
      <div className="">
        <h3 className="font-medium text-base tracking-tight">{data.node.title}</h3>
        <span>{data.node.priceRange.minVariantPrice.amount}</span>
        <span>{data.node.priceRange.minVariantPrice.currencyCode}</span>
        {/* <span>{data.node.priceRange.maxVariantPrice.amount}</span>
        <span>{data.node.priceRange.maxVariantPrice.currencyCode}</span> */}

        <Price amount={data.node.priceRange.minVariantPrice.amount} currency={data.node.priceRange.minVariantPrice.currencyCode} />
      </div>
    </div>
  );
}