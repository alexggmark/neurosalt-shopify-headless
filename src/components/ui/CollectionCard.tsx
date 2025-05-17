import Image from "next/image";

export default function CollectionCard() {
  return (
    <div className="bg-brand-grey rounded-lg p-8 relative flex flex-col items-start">
      <h3 className="font-heading-base">Powdered Meals</h3>
      <div className="w-36 h-36 translate-y-4 -translate-x-3">
        <Image src="/images/prodImg.png" width={200} height={200} alt="test" />
      </div>
      <div className="w-10 h-10 absolute right-8 bottom-8 bg-white rounded-full border border-gray-200 flex items-center justify-center">
        <Image src="/images/arrow-diag-up.svg" width={22} height={22} alt="test" />
      </div>
    </div>
  );
}