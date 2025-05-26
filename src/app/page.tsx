import { getHomepageQuery } from "@/lib/dato/queries/getHomepage";
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


export default async function Home() {
  const shopifyData = await getProducts();
  const homepageData = await getHomepageQuery();

  // const needsShopify = homepageData.page?.content.some(
  //   (block) => block.__typename === 'ProductgridRecord'
  // );

  // const shopifyDataPromise = needsShopify
  //   ? await getProducts()
  //   : Promise.resolve(null);

  return (
    <>
      {homepageData.page?.content.map((block, index) => {
        switch (block.__typename) {
          case "HerobannerRecord":
            return <HeroBanner key={index} data={block} />
          case "ValuepropstripRecord":
            return <ValuePropStrip key={index} data={block} />
          case "CollectiongridRecord":
            return <CollectionGrid key={index} data={block} />
          case "AuthoritystripRecord":
            return <AuthorityBox key={index} data={block} />
          case "ProductgridRecord":
            return <ProductGrid key={index} shopifyData={shopifyData} data={block} />
          case "CarouselslidecontainerRecord":
            return <CarouselSlide key={index} data={block} />;
        }
      })}
      
      {/* <HeroBanner />
      <ValuePropStrip />
      <CollectionGrid />
      <AuthorityBox />
      <ProductGrid data={shopifyData} />
      <CarouselSlide />
      <ImageBlockIcons />
      <IngredientsDropdown />
      <ReviewSlide />
      <ProductFaq />
      <LinkGrid /> */}

    </>
  );
}
