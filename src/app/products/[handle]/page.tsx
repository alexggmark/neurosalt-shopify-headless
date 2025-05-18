import { getShopifyProduct } from '@/lib/shopify/queries/getProductByHandle';
import Link from "next/link";
import Image from 'next/image';

type Props = {
  params: {
    handle: string;
  };
};

export default async function ProductPage(props: Props) {
  const { handle } = await props.params;

  const product = await getShopifyProduct(handle);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-8">
      <Link href="/" className="link-underline-inverted">
        Back home
      </Link>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-lg">
        {product.priceRange.minVariantPrice.amount}{' '}
        {product.priceRange.minVariantPrice.currencyCode}
      </p>
      {product.featuredImage && (
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          className="mt-4 w-full max-w-md rounded-lg"
          width={300}
          height={300}
        />
      )}
    </div>
  );
}
