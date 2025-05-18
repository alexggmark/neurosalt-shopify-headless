import { getShopifyProduct } from '@/lib/shopify/queries/getProductByHandle';
import ProductDetails from '@/components/sections/ProductDetails';

type Props = {
  params: {
    handle: string;
  };
};

export default async function ProductPage(props: Props) {
  const { handle } = await props.params;

  const productData = await getShopifyProduct(handle);
  const product = productData?.productByHandle;

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails data={product} />;
}
