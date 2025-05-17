import Image from "next/image";

export default function ValuePropStrip() {
  return (
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
  );
}