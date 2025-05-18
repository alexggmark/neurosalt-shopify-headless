import Link from "next/link";
import Image from "next/image";
import CollectionCard from "../ui/CollectionCard";
import Button from "../ui/Button";

type Link = {
  imgSrc: string;
  title: string;
  ctaText: string;
  url: string;
}

const links: Link[] = [
  {
    imgSrc: "/images/placeholder.png",
    title: "News, tips, reviews",
    ctaText: "View Our Blog",
    url: "/"
  },
  {
    imgSrc: "/images/placeholder.png",
    title: "Stores near you",
    ctaText: "View Our Blog",
    url: "/"
  },
  {
    imgSrc: "/images/placeholder.png",
    title: "On the gram",
    ctaText: "View Our Blog",
    url: "/"
  }
];

type Data = {
  title: string;
  ctaText: string;
  url: string;
  links: Link[];
}

const data: Data = {
  title: "Spring styles to wear together or apart, whatever the weather.",
  ctaText: "About Us",
  url: "/",
  links
}

export default function LinkGrid() {
  return (
    <div className="page-width">
      <div className="text-center max-w-[600px] mx-auto py-12">
        <h2 className="font-heading-xl mb-10">
          {data.title}
        </h2>
        <Link href={data.url} className="link-underline-inverted">
          {data.ctaText}
        </Link>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data.links.map((link, index) => {
          return (
            <div
              key={index}
              className="relative min-h-[520px] overflow-hidden rounded-2xl flex-shrink-0"
            >
              <Image
                src={link.imgSrc}
                alt={link.title}
                fill
                className="object-cover"
                sizes="(min-width: 860px) 860px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
              <div className="absolute inset-0 flex flex-col justify-end items-center p-10 text-white text-center z-20">
                <h3 className="font-medium text-[28px] tracking-tight mb-3">{link.title}</h3>
                <a
                  href={link.url}
                  className="inline-block"
                >
                  <Button buttonText={link.ctaText}></Button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}