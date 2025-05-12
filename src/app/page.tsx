import CartTrigger from "@/components/cart/CartTrigger";
import QuickShopTrigger from "@/components/quick-shop/QuickShopTrigger";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className="bg-gradient-to-r from-[#081BE5] to-[#05B07C] text-white p-2 flex justify-between uppercase text-base">
        <span>100% CLEAN, NON-IRRITATING</span>
        <span>NO ANIMAL TESTING</span>
        <span>FREE SHIPPING ON ALL U.S. ORDERS $200+</span>
        <span>100% CLEAN, NON-IRRITATING</span>
      </div>


      <div className="page-width">
        <div className="rounded-2xl flex overflow-hidden min-h-96 my-4">
          <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-24">
            <div className="text-white text-center max-w-96 flex flex-col items-center gap-6">
              <h3 className="text-[17px]">Gentle and safe</h3>
              <h1 className="text-2xl font-medium tracking-tight">Made for sensitive skin</h1>
              <p className="text-[18px]">We create safe products that really work and are designed to make you feel good</p>
              <div className="flex gap-4">
                <CartTrigger>
                  <button className="bg-white rounded-full px-8 py-3 text-black hover:bg-slate-200 cursor-pointer">Click this</button>
                </CartTrigger>
                <QuickShopTrigger>
                  <button className="bg-emerald-600 rounded-full px-8 py-3 text-white hover:bg-emerald-400 cursor-pointer">Quick shop</button>
                </QuickShopTrigger>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-slate-500">
            {/* Image here */}
          </div>
        </div>
      </div>


      <div className="page-width page-width--narrow">
        <div className="text-center">
          <h2 className="text-3xl">
            Because you need time for yourself. Blend beauty in you
          </h2>
          <Link href="/posts/first-post" className="underline hover:no-underline underline-offset-8">this page!</Link>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {new Array(6).fill('').map((_, index) => {
            return <div className="bg-brand-grey rounded-2xl p-6" key={index}>X</div>
          })}
        </div>
      </div>

    </div>
  );
}
