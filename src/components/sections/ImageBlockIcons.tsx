import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { ImageBlockIconBlock } from "@/lib/dato/types";

type Props = {
  data: ImageBlockIconBlock;
}

export default function ImageBlockIcons({ data }: Props) {
  return (
    <div className="page-width">
      <div className="rounded-3xl flex overflow-hidden">
        <div className="w-1/2 bg-slate-500 relative">
          <Image src={data.backgroundimage ? data.backgroundimage.url : "/images/placeholder.png"} width={600} height={600} alt="test" className="absolute w-full h-full object-cover" />
        </div>
        <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-20">
          <div className="text-white text-center max-w-[480px] flex flex-col items-center">
            <h1 className="font-heading-3xl mb-3 px-4">{data.title}</h1>
            <p className="font-body-lg mb-10">{data.description}</p>
            <div className="flex justify-center w-full flex-wrap gap-y-6 px-4">
              {data.icon.map((block, index) => {
                return (
                  <div key={index} className="w-1/4 flex items-center flex-col">
                    <Image src={block.image ? block.image.url : "/images/icon-1.svg"} width={60} height={60} alt="icon" />
                    <span className="mt-2 text-lg font-medium tracking-tight">{block.title}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-16">
              <Link href={data.ctaLink ? data.ctaLink : "#"}>
                <Button buttonText={data.ctaText ? data.ctaText : "Shop Now"}></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}