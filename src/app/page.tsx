import AnnouncementBar from "@/components/layout/AnnouncementBar";

import CartTrigger from "@/components/cart/CartTrigger";
// import QuickShopTrigger from "@/components/quick-shop/QuickShopTrigger";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <AnnouncementBar />
      

      <div className="page-width">
        <div className="rounded-2xl flex overflow-hidden min-h-96">
          <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-40">
            <div className="text-white text-center max-w-[400px] flex flex-col items-center">
              <h3 className="text-[18px] mb-4 capitalize">Gentle and safe</h3>
              <h1 className="font-heading-2xl mb-5">Made for sensitive skin</h1>
              <p className="font-body-lg mb-8">We create safe products that really work and are designed to make you feel good</p>
              <div className="flex gap-4">
                <CartTrigger>
                  <Button buttonText="Open Cart"></Button>
                </CartTrigger>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-slate-500 relative">
            <Image src="/images/placeholder.png" width={600} height={600} alt="test" className="absolute w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="page-width">
        <div className="flex justify-center gap-2 mt-9">
          {new Array(5).fill('').map((_, index) => {
            return (
              <div className="rounded-full border border-gray-200 px-3 py-2 relative flex flex-row gap-2 items-center" key={index}>
                <span  className="bg-gray-200 rounded-full w-7 p-1">
                  <Image src="/images/tick.svg" width={22} height={22} alt="test" />
                </span>
                <span className="text-base">
                  Flexible Payment
                </span>
              </div>
            );
          })}
        </div>
      </div>


      <div className="page-width page-width--narrow">
        <div className="text-center max-w-[600px] mx-auto py-12">
          <h2 className="font-heading-xl mb-10">
            Because you need time for yourself. Blend beauty in you
          </h2>
          <Link href="/posts/first-post" className="link-underline">
            Shop All Products
          </Link>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          {new Array(6).fill('').map((_, index) => {
            return (
              <div className="bg-brand-grey rounded-lg p-8 relative flex flex-col items-start" key={index}>
                <h3 className="font-heading-base">Powdered Meals</h3>
                <div className="w-36 h-36 translate-y-4 -translate-x-3">
                  <Image src="/images/prodImg.png" width={200} height={200} alt="test" />
                </div>
                <div className="w-10 h-10 absolute right-8 bottom-8 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <Image src="/images/arrow-diag-up.svg" width={22} height={22} alt="test" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-[600px] mx-auto py-10">
          <div className="flex items-center justify-center gap-6">
            <span className="font-heading-lg">Not sure where to start?</span>
            <Button buttonText="Shop Now" invert></Button>
          </div>
        </div>
      </div>


      <div className="page-width">
        <div className="rounded-2xl bg-black">
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

    </>
  );
}
