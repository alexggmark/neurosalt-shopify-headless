import Link from "next/link";
import CollectionCard from "../ui/CollectionCard";
import Button from "../ui/Button";

export default function CollectionGrid() {
  return (
    <div className="page-width page-width--narrow">
      <div className="text-center max-w-[600px] mx-auto py-12">
        <h2 className="font-heading-xl mb-10">
          Because you need time for yourself. Blend beauty in you
        </h2>
        <Link href="/posts/first-post" className="link-underline">
          Shop All Products
        </Link>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {new Array(6).fill('').map((_, index) => {
          return (
            <CollectionCard key={index}></CollectionCard>
          );
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