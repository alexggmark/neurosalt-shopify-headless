import { AuthorityBlock } from "@/lib/dato/types";
import Image from "next/image";

type Props = {
  data: AuthorityBlock;
}

export default function AuthorityBox({ data }: Props) {
  return (
    <div className="page-width">
      <div className="rounded-3xl bg-black">
        <div className="flex flex-row justify-center items-center md:py-24">
          {data.content.map((block, index) => {
            return (
              <div key={index} className="text-white text-center max-w-[400px] flex flex-col items-center">
                <p className="text-[18px] mb-4 capitalize">{block.text}</p>
                <Image src={block.image ? block.image.url : "/images/prodImg.png"} width={100} height={100} alt="test" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}