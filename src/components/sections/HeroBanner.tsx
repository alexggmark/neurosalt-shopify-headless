import Image from "next/image";
import CartTrigger from "../cart/CartTrigger";
import Button from "../ui/Button";
import { HeroBannerBlock } from "@/lib/dato/types";

type Props = {
  data: HeroBannerBlock;
};

export default function HeroBanner({ data }: Props) {
  return (
    <div className="page-width">
      <div className="rounded-3xl flex overflow-hidden min-h-96">
        <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-36">
          <div className="text-white text-center max-w-[400px] flex flex-col items-center">
            <h3 className="text-[18px] mb-4 capitalize">{data.toptitle}</h3>
            <h1 className="font-heading-3xl mb-5">{data.title}</h1>
            <p className="font-body-lg mb-8">{data.description}</p>
            <div className="flex gap-4">
              <CartTrigger>
                <Button buttonText={data.ctatext ? data.ctatext : 'Nope'}></Button>
              </CartTrigger>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-slate-500 relative">
          <Image src={data.bannerimage ? data.bannerimage.url : "/images/placeholder.png"} width={600} height={600} alt="test" className="absolute w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}