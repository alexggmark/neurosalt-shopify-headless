import { getTestQuery } from "@/lib/dato"
import { getProducts } from "@/lib/shopify";

import HeroBanner from "@/components/sections/HeroBanner";
import ValuePropStrip from "@/components/sections/ValuePropStrip";
import CollectionGrid from "@/components/sections/CollectionGrid";
import AuthorityBox from "@/components/sections/AuthorityBox";
import ProductGrid from "@/components/sections/ProductGrid";
import CarouselSlide from "@/components/sections/CarouselSlide";
import ImageBlockIcons from "@/components/sections/ImageBlockIcons";
import IngredientsDropdown from "@/components/sections/IngredientsDropdown";
import ProductFaq from "@/components/sections/ProductFaq";
import LinkGrid from "@/components/sections/LinkGrid";
import ReviewSlide from "@/components/sections/ReviewSlide";

import CartTrigger from "@/components/cart/CartTrigger";
import Button from "@/components/ui/Button";

import Link from "next/link";
import Image from 'next/image';


// Example of how to conditionally load Shopify data:
// const needsShopify = pageData.content.some(
//   (block) => block.__typename === 'CollectionGridRecord'
// );

// const shopifyDataPromise = needsShopify
//   ? fetchShopifyCollection(...)
//   : Promise.resolve(null);


export default async function Home() {
  const data = await getTestQuery();
  const shopifyData = await getProducts();
  console.log(data);
  console.log(shopifyData);

  return (
    <>
      {/* Example of doing a block loop from DatoCMS data: */}
      {/* {pageData.content.map((block, index) => {
        switch (block.__typename) {
          case 'HeroBannerRecord':
            return <HeroBanner key={index} data={block} />;
          case 'CollectionGridRecord':
            return (
              <CollectionGrid key={index} data={{ ...block, products: shopifyCollection }} />
            );
          default:
            return null;
        }
      })} */}
      
      <HeroBanner />
      <ValuePropStrip />
      <CollectionGrid />
      <AuthorityBox />
      <ProductGrid data={shopifyData} />
      <CarouselSlide />
      <ImageBlockIcons />
      <IngredientsDropdown />
      <ReviewSlide />
      <ProductFaq />
      <LinkGrid />

    </>
  );
}
