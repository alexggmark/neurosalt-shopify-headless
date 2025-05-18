import { GetProductsQuery } from "@/lib/shopify/graphql-types";
import ProductCard from "../ui/ProductCard";

type Props = {
  data: GetProductsQuery;
}

export default function ProductGrid({ data }: Props) {
  return (
    <div className="page-width">
      <div className="grid grid-cols-4 gap-2">
        {data.products.edges.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}