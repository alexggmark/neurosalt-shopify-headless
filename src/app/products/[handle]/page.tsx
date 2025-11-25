// src/app/products/[handle]/page.tsx

import { getShopifyProduct } from '@/lib/shopify/queries/getProductByHandle';
import ProductDetails from '@/components/sections/ProductDetails';

type Params = Promise<{ handle: string }>;

type ProductPageProps = {
  params: Params;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;

  const productData = await getShopifyProduct(handle);
  const product = productData?.productByHandle;

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails data={product} />;
}
