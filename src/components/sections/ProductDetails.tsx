'use client';

import { useState } from 'react';
import Price from '../ui/Price';
import { GetProductByHandleQuery } from '@/lib/shopify/graphql-types';
import Button from '../ui/Button';
import Image from 'next/image';
import CartTrigger from '../cart/CartTrigger';
import ProductGallery from '../ui/ProductGallery';
import StarRating from '../ui/RatingStar';

type Props = {
  data: NonNullable<GetProductByHandleQuery['productByHandle']>;
};

export default function ProductDetails({ data }: Props) {
  const variants = data.variants.edges.map(edge => edge.node);
  const [selectedVariant, setSelectedVariant] = useState(variants[1]);
  const [quantitySelect, setQuantitySelect] = useState(0);

  console.log(data);

  return (
    <div className="page-width">
      <div className="grid grid-cols-12">
        <div className="col-span-7 pr-12">
          <div className="relative aspect-square">
            <ProductGallery images={data.images.edges} />
          </div>
        </div>
        <div className="col-span-5">
          <h1 className="font-heading-xl mb-3">{data.title}</h1>

          <div className="mb-4">
            <StarRating rating={4.5} />
          </div>

          <div className="mb-2">
            <Price
              amount={selectedVariant.price.amount}
              currency={selectedVariant.price.currencyCode}
            />
          </div>

          <p className="mb-4">{data.description}</p>

          {variants.length > 1 && (
            <div className="mt-4 mb-6">
              <label className="block mb-2"><span className="font-bold">Variant:</span> <span>{selectedVariant.title}</span></label>
              <div className="flex flex-wrap gap-1">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-full border text-base cursor-pointer
                      ${
                        selectedVariant.id === variant.id
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-black'
                      }
                    `}
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-row items-center gap-2">
            <div className="rounded-full border border-gray-300 h-12 px-1 flex items-center gap-3">
              <button
                className="h-10 w-10 rounded-full cursor-pointer hover:bg-brand-grey flex items-center justify-center"
                onClick={() => setQuantitySelect(quantitySelect - 1)}
              >
                <Image src="/images/black-minus.svg" width={22} height={22} alt="test" />
              </button>
              <span className="min-w-5 text-center">{quantitySelect}</span>
              <button
                className="h-10 w-10 rounded-full cursor-pointer hover:bg-brand-grey flex items-center justify-center"
                onClick={() => setQuantitySelect(quantitySelect + 1)}
              >
                <Image src="/images/black-plus.svg" width={22} height={22} alt="test" />
              </button>
            </div>
            <div className="w-full flex items-center">
              <CartTrigger>
                <Button buttonText="Open Cart" invert></Button>
              </CartTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
