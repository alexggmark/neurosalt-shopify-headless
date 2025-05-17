'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

type Item = {
  id: string;
  imgSrc: string;
  topTitle: string;
  title: string;
  description: string;
  ctaText: string;
  url: string;
};

const items: Item[] = [
  {
    id: '1',
    imgSrc: '/images/placeholder-light.png',
    topTitle: 'The Vacation Shop',
    title: 'Care for Your Beauty',
    description: 'We create safe products that really work and are designed to make you feel good',
    ctaText: 'Shop Skincare',
    url: '/products/smart-hydration',
  },
  {
    id: '2',
    imgSrc: '/images/placeholder-light.png',
    topTitle: 'Editor’s Pick',
    title: 'Mind Fuel',
    description: 'Designed to fuel your flow state.',
    ctaText: 'Learn More',
    url: '/products/mind-fuel',
  },
  {
    id: '3',
    imgSrc: '/images/placeholder-light.png',
    topTitle: 'Back in Stock',
    title: 'Zen Electrolytes',
    description: 'Balance mood and focus with key minerals.',
    ctaText: 'View Product',
    url: '/products/zen-electrolytes',
  },
  {
    id: '4',
    imgSrc: '/images/placeholder-light.png',
    topTitle: 'Limited Edition',
    title: 'Black Label Salt',
    description: 'Intense formulation for cognitive clarity.',
    ctaText: 'Order Now',
    url: '/products/black-label-salt',
  },
  {
    id: '5',
    imgSrc: '/images/placeholder-light.png',
    topTitle: 'Customer Favorite',
    title: 'Neuro Punch',
    description: 'Fast-acting hydration & mental energy.',
    ctaText: 'See Details',
    url: '/products/neuro-punch',
  },
];

export default function CarouselSlide() {
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
            Because you need time for yourself. Blend beauty in you
          </h2>
          <div className="flex justify-between max-w-24 w-full">
            <button className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
              <Image src="/images/chevron.svg" width={22} height={22} alt="test" className="rotate-180" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
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
            {items.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[800px] min-h-[460px] overflow-hidden rounded-2xl flex-shrink-0"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 600px, 100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end py-16 px-14">
                  <div className="max-w-[280px]">
                    <p className="text-base mb-2">{item.topTitle}</p>
                    <h3 className="font-heading-2xl mb-4">{item.title}</h3>
                    <p className="font-body-base mb-7">{item.description}</p>
                    <a
                      href={item.url}
                      className="inline-block"
                    >
                      <Button buttonText={item.ctaText} invert></Button>
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
