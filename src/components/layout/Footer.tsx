import AnnouncementBar from "./AnnouncementBar";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="page-width">
      <div className="bg-black p-6 rounded-3xl mt-9 mb-6">
        <div className="rounded-full overflow-hidden">
          <AnnouncementBar />
        </div>
        <div className="grid grid-cols-12 text-white py-10 px-4">
          <div className="col-span-5 pr-12">
            <h3 className="font-heading-lg mb-4">Subscribe to get 10% OFF</h3>
            <p className="mb-8 text-base">Subscribe for store updates and discounts.</p>
            <div className="w-full bg-white text-lg text-gray-500 rounded-full py-4 px-6">Email</div>
          </div>
          <div className="col-span-7">
            <div className="flex flex-row justify-between">
              <div className="pr-12">
                <h3 className="font-heading-base mb-4">About</h3>
                <p className="mb-4 text-base">We only carry designs we believe in ethically and aesthetically – original, authentic pieces that are made to last.</p>
                <Link href="/" className="link-underline-inverted">Learn More</Link>
              </div>
              <div className="min-w-40">
                <h3 className="font-heading-base mb-4">Shop</h3>
                <ul className="list-none flex flex-col items-start gap-5 grow font-medium">
                  <Link href="/"><li className="link-underline">Shop</li></Link>
                  <Link href="/"><li className="link-underline">Collections</li></Link>
                  <Link href="/"><li className="link-underline">About Us</li></Link>
                  <Link href="/"><li className="link-underline">Contact</li></Link>
                </ul>
              </div>
              <div className="min-w-40">
                <h3 className="font-heading-base mb-4">Customer care</h3>
                <ul className="list-none flex flex-col items-start gap-5 grow font-medium">
                  <Link href="/"><li className="link-underline">Shop</li></Link>
                  <Link href="/"><li className="link-underline">Collections</li></Link>
                  <Link href="/"><li className="link-underline">About Us</li></Link>
                  <Link href="/"><li className="link-underline">Contact</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/40 text-white/60 text-sm pt-4 px-4">
          Built by <a href="https://www.theconversiondev.com" className="underline hover:no-underline underline-offset-2">Alex</a>
        </div>
      </div>
    </div>
  );
}
