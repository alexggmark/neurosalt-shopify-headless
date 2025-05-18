import { GetProductsQuery } from "@/lib/shopify/graphql-types";
import Image from "next/image";
import Price from "./Price";
import Button from "./Button";
import Link from "next/link";

type Props = {
  data: GetProductsQuery['products']['edges'][number];
}

export default function ProductCard({ data }: Props) {
  return (
    <Link
      href={`/products/${data.node.handle}`}
      className="flex flex-col bg-brand-grey rounded-lg overflow-hidden group h-full"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        {data.node.featuredImage ? (
          <Image
            // src={data.node.featuredImage.url}
            src="/images/placeholder-product.webp" /* Temporary */
            alt={data.node.featuredImage.altText || data.node.title}
            width={300}
            height={300}
            className="w-full h-full absolute group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-slate-300"></div>
        )}
      </div>
      <div className="px-6 pb-4 flex flex-col justify-between flex-grow w-full">
        <div className="">
          <h3 className="font-medium text-base tracking-tight">{data.node.title}</h3>
          <Price amount={data.node.priceRange.minVariantPrice.amount} currency={data.node.priceRange.minVariantPrice.currencyCode} comparePrice={data.node.priceRange.maxVariantPrice.amount} />
        </div>
        <div className="mt-2">
          <Button buttonText="Shop Now" invert fullWidth />
        </div>
      </div>
    </Link>
  );
}