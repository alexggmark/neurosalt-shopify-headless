import { getTestQuery } from "@/lib/dato"
import { getProducts } from "@/lib/shopify";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/sections/HeroBanner";
import ValuePropStrip from "@/components/sections/ValuePropStrip";
import CollectionGrid from "@/components/sections/CollectionGrid";
import CarouselSlide from "@/components/sections/CarouselSlide";
import ImageBlockIcons from "@/components/sections/ImageBlockIcons";
import IngredientsDropdown from "@/components/sections/IngredientsDropdown";
import ProductFaq from "@/components/sections/ProductFaq";
import LinkGrid from "@/components/sections/LinkGrid";
import ReviewSlide from "@/components/sections/ReviewSlide";
import Footer from "@/components/layout/Footer";

import CartTrigger from "@/components/cart/CartTrigger";
import Button from "@/components/ui/Button";

// import QuickShopTrigger from "@/components/quick-shop/QuickShopTrigger";
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

      {data.map((item) => (
        <li key={item.id} className="p-2 bg-gray-100 rounded">
          {item.title}
        </li>
      ))}

      {shopifyData.edges.map(({ node }) => (
        <li key={node.id} className="p-2 bg-gray-100 rounded">
          {node.title}
        </li>
      ))}

      <AnnouncementBar />
      <Header />
      <HeroBanner />
      <ValuePropStrip />
      <CollectionGrid />


      <div className="page-width">
        <div className="rounded-3xl bg-black">
          <div className="flex flex-col justify-center items-center md:py-24">
            <div className="text-white text-center max-w-[400px] flex flex-col items-center">
              <h3 className="text-[18px] mb-4 capitalize">Gentle and safe</h3>
              <div className="flex gap-4">
                <CartTrigger>
                  <Button buttonText="Open Cart"></Button>
                </CartTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>


      <CarouselSlide />
      <ImageBlockIcons />
      <IngredientsDropdown />
      <ReviewSlide />
      <ProductFaq />
      <LinkGrid />
      <Footer />

    </>
  );
}
