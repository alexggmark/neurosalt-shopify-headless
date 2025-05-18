import Image from "next/image";
import CartTrigger from "../cart/CartTrigger";
import Button from "../ui/Button";

export default function HeroBanner() {
  return (
    <div className="page-width">
      <div className="rounded-3xl flex overflow-hidden min-h-96">
        <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-40">
          <div className="text-white text-center max-w-[400px] flex flex-col items-center">
            <h3 className="text-[18px] mb-4 capitalize">Gentle and safe</h3>
            <h1 className="font-heading-3xl mb-5">Made for sensitive skin</h1>
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
  );
}