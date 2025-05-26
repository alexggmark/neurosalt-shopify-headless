'use client';

import { CarouselSlideBlock } from '@/lib/dato/types';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

type Props = {
  data: CarouselSlideBlock;
}

export default function CarouselSlide({ data }: Props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <>
      <div className="page-width">
        <div className="flex justify-between items-center pt-24 pb-7">
          <h2 className="font-heading-xl">
            {data.title}
          </h2>
          <div className="flex justify-between max-w-24 w-full">
            <button className="w-10 h-10 cursor-pointer bg-white rounded-full border border-gray-200 hover:border-gray-500 flex items-center justify-center">
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" className="rotate-180" />
            </button>
            <button className="w-10 h-10 cursor-pointer bg-white rounded-full border border-gray-200 hover:border-gray-500 flex items-center justify-center">
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" />
            </button>
          </div>
        </div>
      </div>
      <div className="page-width--overflow-right relative">
        <div className="w-full overflow-hidden pb-10">
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-4 cursor-grab active:cursor-grabbing will-change-transform mr-12"
          >
            {data.slide.map((item, index) => (
              <div
                key={index}
                className="relative min-w-[800px] min-h-[460px] overflow-hidden rounded-2xl flex-shrink-0"
              >
                <Image
                  src={item.backgroundimage ? item.backgroundimage?.url : "/images/placeholder.png"}
                  alt={item.maintitle ? item.maintitle : "None"}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 600px, 100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end py-16 px-14">
                  <div className="max-w-[280px]">
                    <p className="text-base mb-2">{item.toptitle}</p>
                    <h3 className="font-heading-2xl mb-4">{item.maintitle}</h3>
                    <p className="font-body-base mb-7">{item.text}</p>
                    <a
                      href={item.ctaLink ? item.ctaLink : "None"}
                      className="inline-block"
                    >
                      <Button buttonText={item.ctaText ? item.ctaText : "None"} invert></Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
