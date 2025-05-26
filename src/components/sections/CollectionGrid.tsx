import Link from "next/link";
import CollectionCard from "../ui/CollectionCard";
import Button from "../ui/Button";
import { CollectionGridBlock } from "@/lib/dato/types";

type Props = {
  data: CollectionGridBlock;
};

export default function CollectionGrid({ data }: Props) {
  return (
    <div className="page-width page-width--narrow">
      <div className="text-center max-w-[600px] mx-auto py-12">
        <h2 className="font-heading-xl mb-10">
          {data.title}
        </h2>
        <Link href={data.ctaLink ? data.ctaLink : '/404'} className="link-underline-inverted">
          {data.ctaText}
        </Link>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data.collectiontile.map((block, index) => {
          return <CollectionCard key={index} data={block}></CollectionCard>
        })}
      </div>

      <div className="max-w-[600px] mx-auto py-10">
        <div className="flex items-center justify-center gap-6">
          <span className="font-heading-lg">Not sure where to start?</span>
          <Button buttonText="Shop Now" invert></Button>
        </div>
      </div>
    </div>
  )
}