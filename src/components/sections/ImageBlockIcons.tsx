import Image from "next/image";
import Button from "../ui/Button";

export default function ImageBlockIcons() {
  return (
    <div className="page-width">
      <div className="rounded-2xl flex overflow-hidden">
        <div className="w-1/2 bg-slate-500 relative">
          <Image src="/images/placeholder.png" width={600} height={600} alt="test" className="absolute w-full h-full object-cover" />
        </div>
        <div className="w-1/2 bg-black flex flex-col justify-center items-center md:py-20">
          <div className="text-white text-center max-w-[480px] flex flex-col items-center">
            <h1 className="font-heading-3xl mb-3 px-4">Fuelling the goals of over 3 million</h1>
            <p className="font-body-lg mb-10">Backed by science with 100+ clinically proven health benefits, rigorously tested for ideal nutrition.</p>
            <div className="flex justify-center w-full flex-wrap gap-y-6 px-4">
              {new Array(6).fill('').map((_, index) => {
                return (
                  <div key={index} className="w-1/4 flex items-center flex-col">
                    <Image src={`/images/icon-${index+1}.svg`} width={60} height={60} alt="icon" />
                    <span className="mt-2 text-lg font-medium tracking-tight">Energy</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-16">
              <Button buttonText="Shop Now"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}