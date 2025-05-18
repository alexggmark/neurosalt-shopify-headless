import Image from "next/image";
import Link from "next/link";

export default function CollectionCard() {
  return (
    <Link href="/" className="group block bg-brand-grey rounded-lg overflow-hidden">
      <div className="p-8 relative flex flex-col items-start">
        <h3 className="font-heading-base group-hover:underline underline-offset-8">Powdered Meals</h3>
        <div className="w-36 h-36 translate-y-4 -translate-x-3">
          <Image src="/images/prodImg.png" width={200} height={200} alt="test" />
        </div>
        <div className="w-10 h-10 absolute right-8 bottom-8 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
            <Image src="/images/arrow-diag-up.svg" width={22} height={22} alt="test" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full -translate-x-full transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0">
            <Image src="/images/arrow-diag-up.svg" width={22} height={22} alt="test" />
          </span>
        </div>
      </div>
    </Link>
  );
}
